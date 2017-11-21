function initjs(container) {

    initSelection(container);

    calculateSelection(container);
    initCheckboxesActions(container);
    initSearch();

}

function calculateSelection(container) {
    $('.node-header-group, .node-header-root', $(container))
        .each(
            function () {
                var $this = $(this);
                var l = $this.find('input[type="checkbox"]').length - 1;
                var c = $this.find('input[type="checkbox"]:checked').length;

                var persons = $this
                    .find('input.checkbox-person[type="checkbox"]').length;
                var personsSelected = $this
                    .find('input.checkbox-person[type="checkbox"]:checked').length;

                $this.find('.element-count>span').html(persons);
                $this.find('.element-count-selected>span').html(
                    personsSelected !== 0 ? personsSelected : "");

                if (c > 0 && c < l) {
                    $this.children('input[type="checkbox"]').prop({
                        indeterminate: true,
                        checked: false
                    });
                }
            });

}

function setCheckSelection(element, checked) {
    if (checked)
        element.addClass('selected');
    else
        element.removeClass('selected');
}

function initCheckboxesActions(bigcontainer) {
    $('input[type="checkbox"]', $(bigcontainer))
        .change(
            function () {
                var checked = $(this).prop("checked"), container = $(
                    this).parent();
                // container.find('.search-person-visible>input[type="checkbox"]').each(
                container.find('input[type="checkbox"]').each(
                    function () {
                        $(this).prop({
                            indeterminate: false,
                            checked: checked
                        });
                        setCheckSelection($(this).next(
                            '.node-header-content'), checked);
                    });
                function checkSiblings(el) {
                    var parent = el.parent().parent(), all = true;

                    el.siblings().each(
                        function () {
                            return all = ($(this).children(
                                'input[type="checkbox"]').prop(
                                "checked") === checked);
                        });

                    if (all && checked) {
                        parent.children('input[type="checkbox"]').prop(
                            {
                                indeterminate: false,
                                checked: checked
                            });

                        checkSiblings(parent);
                        setCheckSelection(parent
                            .find('>.node-header-content'), true);
                    } else if (all && !checked) {
                        parent.children('input[type="checkbox"]').prop(
                            "checked", checked);
                        parent
                            .children('input[type="checkbox"]')
                            .prop(
                                "indeterminate",
                                (parent
                                    .find('input[type="checkbox"]:checked').length > 0));
                        checkSiblings(parent);
                        setCheckSelection(parent
                            .find('>.node-header-content'), false);
                    } else {
                        el.parents("li").children(
                            'input[type="checkbox"]').prop({
                            indeterminate: true,
                            checked: false
                        });

                        el.parents("li").children(
                            'input[type="checkbox"]').each(
                            function () {
                                $(this).prop({
                                    indeterminate: true,
                                    checked: false
                                });
                                setCheckSelection($(this).next(
                                    '.node-header-content'),
                                    false);
                            });
                        setCheckSelection(parent
                            .find('>.node-header-content'), false);

                    }
                }

                checkSiblings(container);
                setCheckSelection($(this).next('.node-header-content'),
                    checked);

                calculateSelection(bigcontainer);
            });
}

function initExpanders(container) {
    $('.expander', $(container)).click(function () {
        expandCollapse($(this));
    });

}

function initExpandCollapseAll(container) {
    $('.expander-collapse-all', $(container)).click(
        function () {
            collapse($('.expander', $(container)));
            expand($('.node-header-root', $(container)).children(
                '.node-header-content').find('.expander'));
        });
    $('.expander-expand-all', $(container)).click(function () {
        expand($('.expander', $(container)));
    });
}

function expandCollapse(el) {

    if (el.hasClass('expander-expanded')) {
        collapse(el);
    } else {
        expand(el);
    }
}

function expand(el) {
    el.closest('.node-header').children('ul').show();
    el.removeClass('expander-collapsed').addClass('expander-expanded');
}

function collapse(el) {
    el.closest('.node-header').children('ul').hide();
    el.removeClass('expander-expanded').addClass('expander-collapsed');
}

function initSelection(container) {
    $('input[type="checkbox"]:checked', $(container)).next(
        '.node-header-content').addClass('selected');

    $('.node-header-person a.action-link', $(container)).click(function () {
        $('li.node-header.active', $(container)).removeClass('active');
        $(this).closest('li.node-header').addClass('active');
    });
}

function initSearch() {

    var $treegroups = $("#treegroups");
    var $searchGroups = $("#searchGroups");
    $searchGroups.keyup(function () {
        delay(function () {
            search($searchGroups.val().trim(), $treegroups);
        }, 500);
    });
    $("#clearGroups").click(function () {
        $searchGroups.val('');
        search($searchGroups.val().trim(), $treegroups);
    });

    if ($searchGroups.val().trim().length !== 0)
        search($searchGroups.val().trim(), $treegroups);

    var $treesd = $("#treesd");
    var $searchSd = $("#searchSd");
    $searchSd.keyup(function () {
        delay(function () {
            search($searchSd.val().trim(), $treesd);
        }, 500);
    });
    $("#clearSd").click(function () {
        $searchSd.val('');
        search($searchSd.val().trim(), $treesd);
    });
    if ($searchSd.val().trim().length !== 0)
        search($searchSd.val().trim(), $treesd);

}

var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

function search(text, container) {

    if (text.length === 0) {
        container.find('.node-header-person').each(function () {
            var $lab = $(this).find('.label-for-search');
            $lab.removeClass('search-in');
        });
        container.find('.node-header-group.search-group-not-visible')
            .removeClass('search-group-not-visible').addClass(
            'search-group-visible');
        container.find('.node-header-person.search-person-not-visible')
            .removeClass('search-person-not-visible').addClass(
            'search-person-visible');
    } else {
        var res = text.toLowerCase().split(",");
        var values = new Array();
        var ranges = new Array();
        $.each(res, function (index, value) {
            if (/(^\[)([a-zA-Z_]*[0-9]+);([a-zA-Z_]*[0-9]+)+(\]$)/.test(value)) {

                var splittedRange = value.split(";");
                var firstBound = splittedRange[0].split("[")[1];
                var secondBound = splittedRange[1].split("]")[0];

                var i = 0;
                while (isNaN(firstBound[i])) {
                    i++;
                }

                var k = 0;
                while (isNaN(secondBound[k])) {
                    k++;
                }

                if (i == k) {
                    var samePrefix = true;
                    var j = 0;
                    while (samePrefix && j < i) {
                        samePrefix = firstBound[j] == secondBound[j];
                        j++;
                    }
                    if (samePrefix) {
                        ranges.push({
                            minrange: firstBound,
                            maxrange: secondBound,
                        });
                    }

                } else {
                    values.push(value);
                }

            } else if (value) {
                values.push(value);
            }

        });
        container.find('.node-header-person').each(
            function () {

                var $lab = $(this).find('.label-for-search');
                var $labText = $lab.text().trim().toLowerCase();
                var $labMat = $(this).find('.label-matricule').text().trim();
                var exist = false;

                $.each(values, function (index, value) {
                    if ($labText.indexOf(value) !== -1) {
                        exist = true;
                        return false;
                    }
                });
                console.log("exist==" + exist);
                if (!exist) {
                    $.each(ranges, function (index, value) {
                        if (/^([a-zA-Z_]*[0-9]+)$/.test($labMat)) {
                            var l = 0;
                            while (isNaN(value.minrange[l])) {
                                l++;
                            }
                            var samePrefixLab = true;
                            var m = 0;
                            while (samePrefixLab && m < l) {
                                samePrefixLab = $labMat[m] == value.minrange[m];
                                m++;
                            }
                            if (samePrefixLab) {
                                samePrefixLab = !isNaN($labMat[l]);
                            }
                            if (samePrefixLab) {
                                if (parseInt($labMat.substring(l)) >= parseInt(value.minrange.substring(l)) && parseInt($labMat.substring(l)) <= parseInt(value.maxrange.substring(l))) {
                                    exist = true;
                                    return false;
                                }
                            }
                        }
                    });
                }
                if (exist) {
                    $lab.addClass('search-in');
                    $(this).removeClass('search-person-not-visible')
                        .addClass('search-person-visible');
                } else {
                    $lab.removeClass('search-in');
                    $(this).removeClass('search-person-visible').addClass(
                        'search-person-not-visible');
                }
            }
        )
        ;
        container.find('.node-header-group:has(.search-person-visible)')
            .removeClass('search-group-not-visible').addClass(
            'search-group-visible');
        container.find('.node-header-group')
            .not(':has(.search-person-visible)').removeClass(
            'search-group-visible').addClass(
            'search-group-not-visible');

    }

}