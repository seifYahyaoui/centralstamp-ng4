/**
 * Created by nazgul on 04/06/17.
 */

var layout = $('#content-container').layout({
    minSize: 100	// ALL panes
    , west__size: 200
    , east__size: 200
    , stateManagement__enabled: true

    //	West Sidebar options
    , west__childOptions: {
        minSize: 200	// ALL panes
        , center__paneSelector: '#panel-tree-zone'
        , south__paneSelector: '#panel-tree-device'


        , north__togglerContent_open: "<span class='toggler ion-arrow-down-b'></span>"
        , north__togglerContent_closed: "<span class='toggler ion-arrow-up-b'></span>"
        , south__togglerContent_open: "<span class='toggler ion-arrow-up-b'></span>"
        , south__togglerContent_closed: "<span class='toggler ion-arrow-down-b'></span>"
        , east__togglerContent_open: "<span class='toggler ion-arrow-right-b'></span>"
        , east__togglerContent_closed: "<span class='toggler ion-arrow-left-b'></span>"
        , west__togglerContent_open: "<span class='toggler ion-arrow-left-b'></span>"
        , west__togglerContent_closed: "<span class='toggler ion-arrow-right-b'></span>"
    }

    //	East Sidebar options
    , east__childOptions: {
        minSize: 50	// ALL panes
        , south__size: 100
        , center__paneSelector: '#panel-alarm-workflow'
        , north__paneSelector: '#panel-alarm-list'
        , south__paneSelector: '#panel-alarm-report'

        , north__togglerContent_open: "<span class='toggler ion-arrow-down-b'></span>"
        , north__togglerContent_closed: "<span class='toggler ion-arrow-up-b'></span>"
        , south__togglerContent_open: "<span class='toggler ion-arrow-up-b'></span>"
        , south__togglerContent_closed: "<span class='toggler ion-arrow-down-b'></span>"
        , east__togglerContent_open: "<span class='toggler ion-arrow-right-b'></span>"
        , east__togglerContent_closed: "<span class='toggler ion-arrow-left-b'></span>"
        , west__togglerContent_open: "<span class='toggler ion-arrow-left-b'></span>"
        , west__togglerContent_closed: "<span class='toggler ion-arrow-right-b'></span>"

    }

    //	center options
    , center__childOptions: {
        minSize: 50	// ALL panes
        , south__size: 100
        , center__size: 100
        , south__paneSelector: '#panel-timeline'
        , center__paneSelector: '#panel-events'
        , north__childOptions: {
            minSize: 50	// ALL panes
            , east__paneSelector: '#panel-handling'
            , center__paneSelector: '#panel-map'

            , north__togglerContent_open: "<span class='toggler ion-arrow-down-b'></span>"
            , north__togglerContent_closed: "<span class='toggler ion-arrow-up-b'></span>"
            , south__togglerContent_open: "<span class='toggler ion-arrow-up-b'></span>"
            , south__togglerContent_closed: "<span class='toggler ion-arrow-down-b'></span>"
            , east__togglerContent_open: "<span class='toggler ion-arrow-right-b'></span>"
            , east__togglerContent_closed: "<span class='toggler ion-arrow-left-b'></span>"
            , west__togglerContent_open: "<span class='toggler ion-arrow-left-b'></span>"
            , west__togglerContent_closed: "<span class='toggler ion-arrow-right-b'></span>"
        }

        , north__togglerContent_open: "<span class='toggler ion-arrow-down-b'></span>"
        , north__togglerContent_closed: "<span class='toggler ion-arrow-up-b'></span>"
        , south__togglerContent_open: "<span class='toggler ion-arrow-up-b'></span>"
        , south__togglerContent_closed: "<span class='toggler ion-arrow-down-b'></span>"
        , east__togglerContent_open: "<span class='toggler ion-arrow-right-b'></span>"
        , east__togglerContent_closed: "<span class='toggler ion-arrow-left-b'></span>"
        , west__togglerContent_open: "<span class='toggler ion-arrow-left-b'></span>"
        , west__togglerContent_closed: "<span class='toggler ion-arrow-right-b'></span>"
    }

    , north__togglerContent_open: "<span class='toggler ion-arrow-down-b'></span>"
    , north__togglerContent_closed: "<span class='toggler ion-arrow-up-b'></span>"
    , south__togglerContent_open: "<span class='toggler ion-arrow-up-b'></span>"
    , south__togglerContent_closed: "<span class='toggler ion-arrow-down-b'></span>"
    , east__togglerContent_open: "<span class='toggler ion-arrow-right-b'></span>"
    , east__togglerContent_closed: "<span class='toggler ion-arrow-left-b'></span>"
    , west__togglerContent_open: "<span class='toggler ion-arrow-left-b'></span>"
    , west__togglerContent_closed: "<span class='toggler ion-arrow-right-b'></span>"

});
layout.addToggleBtn('#zzz', 'west')


// layout.sizePane("south", 200);
// layout.sizePane("north", 30);

// LAYOUT END

// SLICK BEGIN
var csdata;
var dataView;
var grid;
var data = [];
var searchString = "";

function ClearFormatter(row, cell, value, columnDef, dataContext) {
    if (dataContext.alarmid == "") return "<i class='ion-information-circled text-info'></i>";
    return value ? "<i class='ion-checkmark-round text-success'></i>" : "<i class='ion-close-round text-danger'></i>";
}
function TypeFormatter(row, cell, value, columnDef, dataContext) {
    return value == "camera" ? "<i class='ion-ios-videocam'></i><span style='margin-left:7px'>" + value + "</span>" : "<i class='ion-ios-locked'></i><span style='margin-left:8px'>" + value + "</span>";
}

var columns = [
    {id: "id", name: "#", field: "id", width: 50, minWidth: 50, maxWidth: 50},
    {id: "time", name: "Time", field: "time", minWidth: 120},
    {id: "name", name: "Event", field: "name", minWidth: 120},
    {id: "devicename", name: "Device", field: "devicename"},
    {id: "devicetype", name: "Type", field: "devicetype", formatter: TypeFormatter},
    {id: "zonename", name: "Zone", field: "zonename", width: 90, minWidth: 90, cssClass: "cell-title"},
    {id: "alarmname", name: "Alarm", field: "alarmname"},
    {
        id: "clear",
        name: "Clear",
        width: 50,
        minWidth: 50,
        maxWidth: 50,
        cssClass: "cell-effort-driven",
        field: "clear",
        formatter: ClearFormatter,
        cannotTriggerInsert: true,
        sortable: true
    }
];

var options = {
    rowHeight: 20,
    editable: false,
    enableAddRow: false,
    enableCellNavigation: true,
};

var percentCompleteThreshold = 0;
var prevPercentCompleteThreshold = 0;
var h_runfilters = null;

csdata = new CS.Data();
var groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider();

dataView = new Slick.Data.DataView({groupItemMetadataProvider: groupItemMetadataProvider, inlineFilters: true});
grid = new Slick.Grid("#myGrid", dataView, columns, options);
var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));

grid.registerPlugin(groupItemMetadataProvider);

$("#inlineFilterPanel")
    .prependTo($('.slick-pager'))
    .show();

$.ajax({
    url: 'data/events100.json',
    async: false,
    dataType: 'json',
    success: function (response) {
        csdata.setEvents(response);
    }
});
$.ajax({
    url: 'data/zones.json',
    async: false,
    dataType: 'json',
    success: function (response) {
        csdata.setZones(response);
    }
});
$.ajax({
    url: 'data/devices.json',
    async: false,
    dataType: 'json',
    success: function (response) {
        csdata.setDevices(response);
    }
});
$.ajax({
    url: 'data/alarms.json',
    async: false,
    dataType: 'json',
    success: function (response) {
        csdata.setAlarms(response);
    }
});

generateTree();

$(function () {

    // wire up model events to drive the grid
    dataView.onRowCountChanged.subscribe(function (e, args) {
        grid.updateRowCount();
        grid.render();
    });

    dataView.onRowsChanged.subscribe(function (e, args) {
        grid.invalidateRows(args.rows);
        grid.render();
    });

    // initialize the model after all the events have been hooked up
    dataView.beginUpdate();
    dataView.setItems(csdata.getEvents());
    dataView.setFilter(myFilter);
    dataView.setFilterArgs({
        percentCompleteThreshold: percentCompleteThreshold,
        searchString: searchString
    });
    dataView.endUpdate();


});
// SLICK END

function myFilter(item, args) {
    if (item["id"] < args.percentCompleteThreshold) {
        return false;
    }
    if (args.searchString != "" && item["name"].indexOf(args.searchString) == -1) {
        return false;
    }
    return true;
}
var selectionAlarm = 0;
function myFilterx(item, args) {
    if ((item["alarmid"] == false) && item["alarmid"] == null || item["alarmid"] == undefined || item["alarmid"] == "") {
        return false;
    }
    if (args.selectionAlarm == -1) {
        return true;
    }
    if (item["alarmid"] != args.selectionAlarm) {
        return false;
    }

    return true;
}


function groupByDevice() {
    dataView.setGrouping({
        getter: "devicename",
        formatter: function (g) {
            return "Device:  " + g.value + "  <span style='color:green'>(" + g.count + " Events)</span>";
        },
        aggregators: [
            new Slick.Data.Aggregators.Avg("devicename")
            // ,new Slick.Data.Aggregators.Sum("cost")
        ],
        aggregateCollapsed: false,
        lazyTotalsCalculation: true
    });
}
function groupByZone() {
    dataView.setGrouping({
        getter: "zonename",
        formatter: function (g) {
            return "Zone:  " + g.value + "  <span style='color:green'>(" + g.count + " Events)</span>";
        },
        aggregators: [
            new Slick.Data.Aggregators.Avg("zonename")
            // ,new Slick.Data.Aggregators.Sum("cost")
        ],
        aggregateCollapsed: false,
        lazyTotalsCalculation: true
    });
}
function groupByAlarm() {
    dataView.setGrouping({
        getter: "alarmname",
        formatter: function (g) {
            return "Alarm:  " + g.value + "  <span style='color:green'>(" + g.count + " Events)</span>";
        },
        aggregators: [
            new Slick.Data.Aggregators.Avg("alarmname")
            // ,new Slick.Data.Aggregators.Sum("cost")
        ],
        aggregateCollapsed: false,
        lazyTotalsCalculation: true
    });
}
$("#pcSlider,#pcSlider2").slider({
    "range": "min",
    "slide": function (event, ui) {
        Slick.GlobalEditorLock.cancelCurrentEdit();
        if (percentCompleteThreshold != ui.value) {
            window.clearTimeout(h_runfilters);
            h_runfilters = window.setTimeout(updateFilter, 10);
            percentCompleteThreshold = ui.value;
        }
    }
});

$("#txtSearch,#txtSearch2").keyup(function (e) {
    Slick.GlobalEditorLock.cancelCurrentEdit();
    // clear on Esc
    if (e.which == 27) {
        this.value = "";
    }
    searchString = this.value;
    updateFilter();
});

function updateFilter() {
    dataView.setFilterArgs({
        percentCompleteThreshold: percentCompleteThreshold,
        searchString: searchString
    });
    dataView.refresh();
}

function updateFilterx() {
    dataViewx.setFilterArgs({
        selectionAlarm: selectionAlarm
    });
    dataViewx.refresh();
}

function getFormattedDate(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    var hour = date.getHours().toString();
    var minute = date.getMinutes().toString();
    var sec = date.getSeconds().toString();
    return month + '/' + day + '/' + year + ' ' +
        (hour > 9 ? hour : '0' + hour) + ':' +
        (minute > 9 ? minute : '0' + minute) + ':' +
        (sec > 9 ? sec : '0' + sec);
}

//$(".ui-layout-center").load("map.html");

function generateTreeActions() {
    $(".tree-zone .tree-link, .tree-device .tree-link").click(function () {
        var $this = $(this);
        var type = $this.attr("type");
        var entity = $this.attr("entity");
        var long;
        var lat;
        if (type == "zone") {
            long = csdata.getZones()[entity].longitude;
            lat = csdata.getZones()[entity].latitude;
            zoom = csdata.getZones()[entity].zoom;
            animateTo((getCenterOfExtent(csdata.getZones()[entity].extent)), zoom);

        } else if (type == "device") {
            long = csdata.getDevices()[entity].longitude;
            lat = csdata.getDevices()[entity].latitude;
            animateTo(ol.proj.fromLonLat([long, lat]));

        }

    });
}

function getCenterOfExtent(Extent){
    var X = Extent[0] + (Extent[2]-Extent[0])/2;
    var Y = Extent[1] + (Extent[3]-Extent[1])/2;
    return [X, Y];
}


function generateTree() {
    generateTreeInit($("#tree"), getRoots());
    generateTreeActions();

}

function generateTreeInit($parent, children) {
    var $r = document.createElement("ul");
    $parent.append($r);

    for (var i = 0; i < children.length; i++) {
        var zone = children[i];
        // $r.append(z);
        generateNodeZone(zone, $r);
        generateNodeDevice(zone, $r);
    }

}

function generateNodeZone(zone, $p) {
    var z = generateZoneLine(zone);
    $p.append(z);
    var children = getChildrenZones(zone);
    if (children.length > 0)
        generateTreeInit($p, children);
}

function generateNodeDevice(zone, $p) {
    var $r = document.createElement("ul");
    var children = getChildrenDevices(zone);
    if (children.length > 0) {
        for (var i = 0; i < children.length; i++) {
            var dd = children[i];
            var d = generateDeviceLine(dd);
            $r.append(d);
        }
        $p.append($r);
    }

}

function generateDeviceLine(device) {
    var d = document.createElement("li");
    d.setAttribute("class", "tree-device");
    d.innerHTML = ("<span class='tree-icon " + (device.type == "camera" ? "ion-ios-videocam" : "ion-ios-locked") + "'></span><span class='tree-label'>" + device.name +
    "</span><a id='" + device.id + "' type='device' entity='" + device.id +
    "' class='tree-link ion-ios-navigate-outline'><span></span></a>");
    return d;
}

function generateZoneLine(zone) {
    var z = document.createElement("li");
    z.setAttribute("class", "tree-zone");
    z.innerHTML = ("<span class='tree-icon ion-ios-location'></span><span class='tree-label'>" + zone.name +
    "</span><a id='" + zone.id + "' type='zone' entity='" + zone.id +
    "' class='tree-link ion-ios-navigate'><span></span></a>");
    return z;
}

function getRoots() {
    var res = [];
    for (var i = 0; i < csdata.getZones().length; i++) {
        var zz = csdata.getZones()[i];
        if (zz.parent == null) {
            res.push(zz);
        }
    }
    ;
    return res;
}

function getChildrenZones(zone) {
    var res = [];
    for (var i = 0; i < csdata.getZones().length; i++) {
        var zz = csdata.getZones()[i];
        if (zz.parent == zone.id) {
            res.push(zz);
        }
    }
    ;
    return res;
}

function getChildrenDevices(zone) {
    var res = [];
    for (var i = 0; i < csdata.getDevices().length; i++) {
        var dd = csdata.getDevices()[i];
        if (dd.zone == zone.id) {
            res.push(dd);
        }
    }
    return res;
}


// var videos = document.querySelectorAll('video');
//
// for (var i = 0; i < videos.length; i++) {
//     videos[i].playbackRate = 3;
// }


// alarms slick grid


(function () {
    var cache = {};
    this.tmpl = function tmpl(str, data) {
        // Figure out if we're getting a template, or if we need to
        // load the template - and be sure to cache the result.
        var fn = !/\W/.test(str) ?
            cache[str] = cache[str] ||
                tmpl(document.getElementById(str).innerHTML) :
            // Generate a reusable function that will serve as a template
            // generator (and which will be cached).
            new Function("obj",
                "var p=[],print=function(){p.push.apply(p,arguments);};" +
                // Introduce the data as local variables using with(){}
                "with(obj){p.push('" +
                // Convert the template into pure JavaScript
                str
                    .replace(/[\r\t\n]/g, " ")
                    .split("<%").join("\t")
                    .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                    .replace(/\t=(.*?)%>/g, "',$1,'")
                    .split("\t").join("');")
                    .split("%>").join("p.push('")
                    .split("\r").join("\\'") + "');}return p.join('');");
        // Provide some basic currying to the user
        return data ? fn(data) : fn;
    };
})();
var gridx;
var datax = [];
var columnsx = [
    {id: "contact-card", name: "Contacts", formatter: renderCell, width: 300, cssClass: "alarm-card-cell"}
];
var optionsx = {
    rowHeight: 27,
    editable: false,
    enableAddRow: false,
    enableCellNavigation: false,
    enableColumnReorder: false
};
var compiled_template = tmpl("cell_template");
function renderCell(row, cell, value, columnDef, dataContext) {
    dataContext.clazz = "bg-" + alert_type[dataContext.alarmid].type;
    dataContext.clazzIcon = (dataContext.devicetype == "camera" ? "ion-ios-videocam" : "ion-ios-locked");

    return compiled_template(dataContext);
}

dataViewx = new Slick.Data.DataView({inlineFilters: true});
gridx = new Slick.Grid("#alarms", dataViewx, columnsx, optionsx);

$(function () {

    // wire up model events to drive the grid
    dataViewx.onRowCountChanged.subscribe(function (e, args) {
        gridx.updateRowCount();
        gridx.render();
    });

    dataViewx.onRowsChanged.subscribe(function (e, args) {
        gridx.invalidateRows(args.rows);
        gridx.render();
    });

    // initialize the model after all the events have been hooked up
    dataViewx.beginUpdate();
    // var zz = csdata.getEventsByAlarm(null, false);
    // dataViewx.setItems(zz);

    dataViewx.setItems(csdata.getEvents());
    dataViewx.setFilter(myFilterx);
    dataViewx.setFilterArgs({
        selectionAlarm: selectionAlarm,
    });
    dataViewx.endUpdate();
    // triggerAlarmTreat();

});


window.setInterval(function () {
    if (autogeneration)
        AddNewRow();

}, 2000);

function AddNewRow() {
    var ee = csdata.generateEvent(dataView.getLength(), new Date());
    // csdata.getEvents().push(ee);
    dataView.insertItem(0, ee);

    if (ee.alarmid != "") {
        // dataViewx.insertItem(0, ee);
        dataViewx.refresh();
        alertNotif(ee);
        animateTo(ol.proj.fromLonLat([csdata.getDevices()[ee.deviceid].longitude, csdata.getDevices()[ee.deviceid].latitude]));
        flashXtimes(ol.proj.fromLonLat([csdata.getDevices()[ee.deviceid].longitude, csdata.getDevices()[ee.deviceid].latitude]));
    }


    items.add({
        id: ee.id,
        group: ee.deviceid,
        start: new Date(ee.time),
        content: "",
        title: '<div>' + ee.name + ' [' + ee.time + ']' + '</div>',
        'className': ee.alarmid == "" ? "nothing" : alert_type[parseInt(ee.alarmid)].type
    });
    timeline1.redraw();
}
// {"id":499,"name":"Motion detection","zoneid":"2","zonename":"Ariana","deviceid":"4","devicename":"Capteur 4","devicetype":"camera","alarmid":"1","alarmname":"Medium","desc":"event description","time":"06/21/2017 02:58:17","clear":true}

alert_type = [
    {alarm: "0", type: "danger"},
    {alarm: "1", type: "warning"},
    {alarm: "2", type: "info"},
];

var stack_bottom_left = {"dir1": "right", "dir2": "up", "push": "top"};

function alertNotif(ev) {

    var notice = new PNotify({
        // title: 'Left icon',
        text: createAlertNotifContent(ev),
        addclass: 'stack-bottom-left bg-'+alert_type[ev.alarmid].type,
        stack: stack_bottom_left,
        width: '350px',
        buttons: {
            closer: true,
            sticker: true
        },
        history: {
            history: true
        },
        delay: 10000
    });
    notice.get().find('button[name=close]').on('click', function() {
        notice.remove();
    })


    // fireDesktopAlarm(ev.name, ev.time + ', ' + ev.devicename + ', ' + ev.zonename + ', ' + ev.desc);
}
// $('#popup-zone-icon').removeClass().addClass(z.devicetype == "camera" ? "ion-ios-videocam" : "ion-ios-locked");

function createAlertNotifContent(ev) {

    var alert = '<div class="media-left"><span class="icon-wrap icon-wrap-xs icon-circle alert-icon"><i class="' +
        (ev.devicetype == "camera" ? "ion-ios-videocam" : "ion-ios-locked") +
        ' icon-2x"></i></span></div>' +
        '<div class="media-body">' +
        '<strong class="alert-title">' +
        ev.name +
        '</strong>' +
        '<p class="alert-message">' +
        '<span>' + ev.devicename + ', ' + '</span>' +
        '<span class="tree-icon ion-ios-location"></span>' +
        ' <span class="text-bold">' + ev.zonename + '</span>' +

        '</p>' +
        '<p class="alert-message">' +
        ev.desc +
        '</p>' +
        '</div>' +
        '<div class="alert-action">' +
        ' <button onclick="treatAlarm(' + ev.id + ');" class="btn btn-sm btn-success btn-icon" title="Take Alarm" name="close"><i class="ion-edit icon-lg"></i></button>' +
        ' <button class="btn btn-sm btn-warning btn-icon" title="Keep waiting"><i class="ion-clock icon-lg"></i></button>' +
        ' <button class="btn btn-sm btn-default btn-icon" title="Cancel" name="close"><i class="ion-close-round icon-lg"></i></button>' +
        ' <button class="btn btn-sm btn-danger btn-icon" title="Clear"><i class="ion-paper-airplane icon-lg"></i></button>' +
        '<span class="text-bold" style="float: right;margin-top: 10px;">' +
        ev.time +
        '</span>' +
        '</div>';
    return alert;
}

function treatAlarm(idd) {
    var ev = csdata.getEventById(idd);
    $('#alarm-w-name').text(ev.name)
    $('#alarm-w-type').removeClass().addClass("alert-" + alert_type[ev.alarmid].type).addClass("alert");
    $('#alarm-w-zone').text(ev.zonename)
    $('#alarm-w-devicename').text(ev.devicename)
    $('#alarm-w-time').text(ev.time)
    $('#alarm-w-id').text(ev.id)
    $('#alarm-w-icon').removeClass().addClass(ev.devicetype == "camera" ? "ion-ios-videocam" : "ion-ios-locked");
    step0();
    $('#panel-alarm-workflow>div').show();
}
function triggerAlarmTreat() {
    // $("#alarms .alarm-treat").click(function(){
    //     var iddd = $(this).find(".alarm-id").html();
    //     treatAlarm(iddd);
    // });
}

$("#alarms").on('click', '.alarm-treat', function () {
    var iddd = $(this).find(".alarm-id").html();
    treatAlarm(iddd);
});


var autogeneration = $('#accept').is(':checked') ? true : false;
$("#demo-sticky-alert").change(function () {
    autogeneration = $(this).is(':checked') ? true : false;
});

$("#selection-alarm>li>a").click(function () {
    selectionAlarm = parseInt($(this).attr("alarm"));
    updateFilterx();
});


// Get handles on the video and canvas elements
var $video = $('#video-snapshot');
var video = document.getElementById('video-snapshot');
var canvas = document.getElementById('snapshot');
// Get a handle on the 2d context of the canvas element
var context = canvas.getContext('2d');
// Define some vars required later
var w, h, ratio;

// Add a listener to wait for the 'loadedmetadata' state so the video's dimensions can be read
video.addEventListener('loadedmetadata', function () {
    // Calculate the ratio of the video's width to height
    ratio = $video.width() / $video.height();
    // Define the required width as 100 pixels smaller than the actual video's width
    w = $video.width() - 61;
    // Calculate the height based on the video's width and the ratio
    h = parseInt(w / ratio, 10);
    // Set the canvas width and height to the values just calculated
    canvas.width = w;
    canvas.height = h;
}, false);

// Takes a snapshot of the video
function snap() {
    // Define the size of the rectangle that will be filled (basically the entire element)
    context.fillRect(0, 0, w, h);
    // Grab the image from the video
    context.drawImage(video, 0, 0, w, h);

}
function addsnap() {
    var image = new Image();
    image.src = canvas.toDataURL();
    document.getElementById('report-snapshots').appendChild(image);

}


var alarmwstep1 = $("#alarm-w-step--1");
var alarmwstep2 = $("#alarm-w-step--2");
var alarmwstep3 = $("#alarm-w-step--3");
var alarmwstep4 = $("#alarm-w-step--4");
var alarmwstep5 = $("#alarm-w-step--5");

$("#panel-alarm-workflow").on("click", "button[id^='alarm-w-step-validation--']", function () {
    var n = $(this).attr("id").substring(25, 27);
    switch (n) {
        case "0":
            step1();
            break;
        case "1":
            step2();
            break;
        case "2":
            step3();
            break;
        case "3":
            step4();
            break;
        case "4":
            step5();
            break;
        case "5":
            stepfinish();
            break;
        default:
            break;

    }
});

function step0() {
    alarmwstep1.show();
    alarmwstep2.hide();
    alarmwstep3.hide();
    alarmwstep4.hide();
    alarmwstep5.hide();
    $("#report-snapshots").html("");
}

function step1() {
    alarmwstep1.show();
}
function step2() {
    alarmwstep2.show();
}
function step3() {
    alarmwstep3.show();
}
function step4() {
    alarmwstep4.show();
}
function step5() {
    alarmwstep5.show();
}
function stepfinish() {
    alarmwstep5.show();
}

function fireDesktopAlarm(title, text) {
    PNotify.desktop.permission();
    (new PNotify({
            title: title,
            text: text,
            desktop: {
                desktop: true,
                addclass: 'bg-green',
                icon: 'lib/images/alarm.png'
            }
        })
    ).get().click(function (e) {
        if ($('.ui-pnotify-closer, .ui-pnotify-sticker, .ui-pnotify-closer *, .ui-pnotify-sticker *').is(e.target)) return;
        // alert('Hey! You clicked the desktop notification!');
    });
}
// Default
$('#pnotify-desktop-default').on('click', function () {
    PNotify.desktop.permission();
    (new PNotify({
            title: 'Default Desktop Notice',
            text: 'If you\'ve given me permission, I\'ll appear as a desktop notification.',
            desktop: {
                desktop: true,
                addclass: 'bg-green',
                icon: 'lib/images/alarm.png'
            }
        })
    ).get().click(function (e) {
        if ($('.ui-pnotify-closer, .ui-pnotify-sticker, .ui-pnotify-closer *, .ui-pnotify-sticker *').is(e.target)) return;
        alert('Hey! You clicked the desktop notification!');
    });
});


$(".scrollable, .slick-viewport").niceScroll({
    cursorcolor: "#0c80df",
    cursorwidth: "4px",
    background: "rgba(128,128,128,0.5)",
    cursorborder: "0",
    cursorborderradius: 0,
    autohidemode: 'leave',
    horizrailenabled: false
});


$("#panel-tree-zone, #panel-tree-device, #panel-alarm-workflow, #panel-alarm-list, #panel-alarm-report, " +
    "#panel-timeline, #panel-events, #panel-handling, #panel-map").each(function () {
    var $panel = $(this);
    $panel.addClass("expandable");
    var $b = $("<button>", {"class": "btn btn-default btn-position"});

    $b.on("click", function () {
        if ($(this).parent().hasClass("panel-expanded")) {
            $(this).parent().removeClass("panel-expanded");
            $("#navbar").removeClass("hidden");
        } else {
            $(this).parent().addClass("panel-expanded");
            $("#navbar").addClass("hidden");
        }
    });

    $panel.append($b);
})


















