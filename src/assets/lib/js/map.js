/**
 * Created by nazgul on 11/06/17.
 */
var london = ol.proj.fromLonLat([-0.12755, 51.507222]);
var moscow = ol.proj.fromLonLat([37.6178, 55.7517]);
var istanbul = ol.proj.fromLonLat([28.9744, 41.0128]);
var rome = ol.proj.fromLonLat([12.5, 41.9]);
var bern = ol.proj.fromLonLat([7.4458, 46.95]);

var polyline = [
    'hldhx@lnau`BCG_EaC??cFjAwDjF??uBlKMd@}@z@??aC^yk@z_@se@b[wFdE??wFfE}N',
    'fIoGxB_I\\gG}@eHoCyTmPqGaBaHOoD\\??yVrGotA|N??o[N_STiwAtEmHGeHcAkiA}^',
    'aMyBiHOkFNoI`CcVvM??gG^gF_@iJwC??eCcA]OoL}DwFyCaCgCcCwDcGwHsSoX??wI_E',
    'kUFmq@hBiOqBgTwS??iYse@gYq\\cp@ce@{vA}s@csJqaE}{@iRaqE{lBeRoIwd@_T{]_',
    'Ngn@{PmhEwaA{SeF_u@kQuyAw]wQeEgtAsZ}LiCarAkVwI}D??_}RcjEinPspDwSqCgs@',
    'sPua@_OkXaMeT_Nwk@ob@gV}TiYs[uTwXoNmT{Uyb@wNg]{Nqa@oDgNeJu_@_G}YsFw]k',
    'DuZyDmm@i_@uyIJe~@jCg|@nGiv@zUi_BfNqaAvIow@dEed@dCcf@r@qz@Egs@{Acu@mC',
    'um@yIey@gGig@cK_m@aSku@qRil@we@{mAeTej@}Tkz@cLgr@aHko@qOmcEaJw~C{w@ka',
    'i@qBchBq@kmBS{kDnBscBnFu_Dbc@_~QHeU`IuyDrC_}@bByp@fCyoA?qMbD}{AIkeAgB',
    'k_A_A{UsDke@gFej@qH{o@qGgb@qH{`@mMgm@uQus@kL{_@yOmd@ymBgwE}x@ouBwtA__',
    'DuhEgaKuWct@gp@cnBii@mlBa_@}|Asj@qrCg^eaC}L{dAaJ_aAiOyjByH{nAuYu`GsAw',
    'Xyn@ywMyOyqD{_@cfIcDe}@y@aeBJmwA`CkiAbFkhBlTgdDdPyiB`W}xDnSa}DbJyhCrX',
    'itAhT}x@bE}Z_@qW_Kwv@qKaaAiBgXvIm}A~JovAxCqW~WanB`XewBbK{_A`K}fBvAmi@',
    'xBycBeCauBoF}}@qJioAww@gjHaPopA_NurAyJku@uGmi@cDs[eRaiBkQstAsQkcByNma',
    'CsK_uBcJgbEw@gkB_@ypEqDoqSm@eZcDwjBoGw`BoMegBaU_`Ce_@_uBqb@ytBwkFqiT_',
    'fAqfEwe@mfCka@_eC_UmlB}MmaBeWkkDeHwqAoX}~DcBsZmLcxBqOwqE_DkyAuJmrJ\\o',
    '~CfIewG|YibQxBssB?es@qGciA}RorAoVajA_nAodD{[y`AgPqp@mKwr@ms@umEaW{dAm',
    'b@umAw|@ojBwzDaaJsmBwbEgdCsrFqhAihDquAi`Fux@}_Dui@_eB_u@guCuyAuiHukA_',
    'lKszAu|OmaA{wKm}@clHs_A_rEahCssKo\\sgBsSglAqk@yvDcS_wAyTwpBmPc|BwZknF',
    'oFscB_GsaDiZmyMyLgtHgQonHqT{hKaPg}Dqq@m~Hym@c`EuiBudIabB{hF{pWifx@snA',
    'w`GkFyVqf@y~BkoAi}Lel@wtc@}`@oaXi_C}pZsi@eqGsSuqJ|Lqeb@e]kgPcaAu}SkDw',
    'zGhn@gjYh\\qlNZovJieBqja@ed@siO{[ol\\kCmjMe\\isHorCmec@uLebB}EqiBaCg}',
    '@m@qwHrT_vFps@kkI`uAszIrpHuzYxx@e{Crw@kpDhN{wBtQarDy@knFgP_yCu\\wyCwy',
    'A{kHo~@omEoYmoDaEcPiuAosDagD}rO{{AsyEihCayFilLaiUqm@_bAumFo}DgqA_uByi',
    '@swC~AkzDlhA}xEvcBa}Cxk@ql@`rAo|@~bBq{@``Bye@djDww@z_C_cAtn@ye@nfC_eC',
    '|gGahH~s@w}@``Fi~FpnAooC|u@wlEaEedRlYkrPvKerBfYs}Arg@m}AtrCkzElw@gjBb',
    'h@woBhR{gCwGkgCc[wtCuOapAcFoh@uBy[yBgr@c@iq@o@wvEv@sp@`FajBfCaq@fIipA',
    'dy@ewJlUc`ExGuaBdEmbBpBssArAuqBBg}@s@g{AkB{bBif@_bYmC}r@kDgm@sPq_BuJ_',
    's@{X_{AsK_d@eM{d@wVgx@oWcu@??aDmOkNia@wFoSmDyMyCkPiBePwAob@XcQ|@oNdCo',
    'SfFwXhEmOnLi\\lbAulB`X_d@|k@au@bc@oc@bqC}{BhwDgcD`l@ed@??bL{G|a@eTje@',
    'oS~]cLr~Bgh@|b@}Jv}EieAlv@sPluD{z@nzA_]`|KchCtd@sPvb@wSb{@ko@f`RooQ~e',
    '[upZbuIolI|gFafFzu@iq@nMmJ|OeJn^{Qjh@yQhc@uJ~j@iGdd@kAp~BkBxO{@|QsAfY',
    'gEtYiGd]}Jpd@wRhVoNzNeK`j@ce@vgK}cJnSoSzQkVvUm^rSgc@`Uql@xIq\\vIgg@~k',
    'Dyq[nIir@jNoq@xNwc@fYik@tk@su@neB}uBhqEesFjoGeyHtCoD|D}Ed|@ctAbIuOzqB',
    '_}D~NgY`\\um@v[gm@v{Cw`G`w@o{AdjAwzBh{C}`Gpp@ypAxn@}mAfz@{bBbNia@??jI',
    'ab@`CuOlC}YnAcV`@_^m@aeB}@yk@YuTuBg^uCkZiGk\\yGeY}Lu_@oOsZiTe[uWi[sl@',
    'mo@soAauAsrBgzBqgAglAyd@ig@asAcyAklA}qAwHkGi{@s~@goAmsAyDeEirB_{B}IsJ',
    'uEeFymAssAkdAmhAyTcVkFeEoKiH}l@kp@wg@sj@ku@ey@uh@kj@}EsFmG}Jk^_r@_f@m',
    '~@ym@yjA??a@cFd@kBrCgDbAUnAcBhAyAdk@et@??kF}D??OL'
].join('');

var route = /** @type {ol.geom.LineString} */ (new ol.format.Polyline({
    factor: 1e6
}).readGeometry(polyline, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
}));

var routeCoords = route.getCoordinates();
var routeLength = routeCoords.length;

var routeFeature = new ol.Feature({
    type: 'route',
    geometry: route
});
var geoMarker = new ol.Feature({
    type: 'geoMarker',
    geometry: new ol.geom.Point(routeCoords[0])
});
var startMarker = new ol.Feature({
    type: 'icon',
    geometry: new ol.geom.Point(routeCoords[0])
});
var endMarker = new ol.Feature({
    type: 'icon',
    geometry: new ol.geom.Point(routeCoords[routeLength - 1])
});

var styles = {
    'route': new ol.style.Style({
        stroke: new ol.style.Stroke({
            width: 6, color: [237, 212, 0, 0.8]
        })
    }),
    'icon': new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: 'https://openlayers.org/en/v4.1.1/examples/data/icon.png'
        })
    }),
    'geoMarker': new ol.style.Style({
        image: new ol.style.Circle({
            radius: 7,
            snapToPixel: false,
            fill: new ol.style.Fill({color: 'black'}),
            stroke: new ol.style.Stroke({
                color: 'white', width: 2
            })
        })
    }),
    'iconZone': new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            scale: 0.7,
            src: 'lib/images/zone_64.png'
        })
    }),
    'iconDoorClosed': new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            scale: 0.7,
            src: 'lib/images/door-closed_64.png'
        })
    }),
    'iconDoorOpen': new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            scale: 0.7,
            src: 'lib/images/door-open_64.png'
        })
    }),
    'iconCamera': new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            scale: 0.7,
            src: 'lib/images/camera_64.png'
        })
    })
};


var center = [-5639523.95, -3501274.52];

var view = new ol.View({
    center: center,
    zoom: 10,
    minZoom: 2,
    maxZoom: 19
});

var animating = false;
var speed, now;
var speedInput = document.getElementById('speed');
var startButton = document.getElementById('start-animation');

var vectorLayer = new ol.layer.Vector({
    'title': 'CS Components',
    visible: true,
    source: new ol.source.Vector({
        features: [routeFeature, geoMarker, startMarker, endMarker]
    }),
    style: function (feature) {
        // hide geoMarker if animation is active
        if (animating && feature.get('type') === 'geoMarker') {
            return null;
        }
        return styles[feature.get('type')];
    },
});

var origin = new ol.layer.Tile({
    'title': 'CS Origin OSM',
    visible: true,
    preload: Infinity,
    source: new ol.source.OSM(),
    type: 'base'
});

// var raster = new ol.layer.Tile({
//     source: new ol.source.OSM()
// });

// -5782996.252091276
// 1
// :
// -3576947.1780023244
// 2
// :
// -5496051.647908724
// 3
// :
// -3425601.8619976756
// map.getView().calculateExtent(map.getSize())
var imagesLayer = [];
var ovProj = ol.proj.get('EPSG:3857');

for (var i = 0; i < csdata.getZones().length; i++) {
    var zzz = csdata.getZones()[i];

    imagesLayer.push(new ol.layer.Image({
        source: new ol.source.ImageStatic({
            url: "data/zones/" + zzz.id + ".jpg",
            // imageSize: [1239,748],
            // imageExtent: [1100458.7999577774, 4400002.700673439, 1172194.9510034155, 4437839.029674601],
            imageExtent: zzz.extent,
            projection: ovProj

        }),

        opacity: 0.7
    }));
}





var map = new ol.Map({
    target: document.getElementById('map'),
    controls: ol.control.defaults().extend([
        new ol.control.FullScreen(), new ol.control.OverviewMap()
    ]),

    // layers: [origin, raster, vectorLayer],

    layers: [
        new ol.layer.Group({
            'title': 'Base maps',
            layers: [
                origin,
                new ol.layer.Group({
                    title: 'Images',
                    layers: imagesLayer
                }),
                new ol.layer.Tile({
                    title: 'Stamen - Water color',
                    type: 'base',
                    visible: false,
                    source: new ol.source.Stamen({
                        layer: 'watercolor'
                    })
                }),
                new ol.layer.Tile({
                    title: 'Stamen - Toner',
                    type: 'base',
                    visible: false,
                    source: new ol.source.Stamen({
                        layer: 'toner'
                    })
                }),
                new ol.layer.Tile({
                    title: 'Thunderforest - OpenCycleMap',
                    type: 'base',
                    visible: false,
                    source: new ol.source.OSM({
                        url: 'http://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',

                    })
                }),
                new ol.layer.Tile({
                    title: 'Thunderforest - Outdoors',
                    type: 'base',
                    visible: false,
                    source: new ol.source.OSM({
                        url: 'http://{a-c}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png',

                    })
                }),
                new ol.layer.Tile({
                    title: 'Thunderforest - Landscape',
                    type: 'base',
                    visible: false,
                    source: new ol.source.OSM({
                        url: 'http://{a-c}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',

                    })
                }),
                new ol.layer.Tile({
                    title: 'Thunderforest - Transport',
                    type: 'base',
                    visible: false,
                    source: new ol.source.OSM({
                        url: 'http://{a-c}.tile.thunderforest.com/transport/{z}/{x}/{y}.png',

                    })
                }),
                new ol.layer.Tile({
                    title: 'Thunderforest - Transport Dark',
                    type: 'base',
                    visible: false,
                    source: new ol.source.OSM({
                        url: 'http://{a-c}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png',

                    })
                }),

            ]
        }),
        new ol.layer.Group({
            title: 'Overlays',
            layers: [
                new ol.layer.Image({
                    title: 'Countries',
                    source: new ol.source.ImageArcGISRest({
                        ratio: 1,
                        params: {'LAYERS': 'show:0'},
                        url: "https://ons-inspire.esriuk.com/arcgis/rest/services/Administrative_Boundaries/Countries_December_2016_Boundaries/MapServer"
                    })
                }),
                vectorLayer
            ]
        })

    ],
    // Improve user experience by loading tiles while animating. Will make
    // animations stutter on mobile or slow devices.
    loadTilesWhileAnimating: true,
    view: view
});


map.addControl(new ol.control.LayerSwitcher());

//draw

var features = new ol.Collection();
var featureOverlay = new ol.layer.Vector({
    source: new ol.source.Vector({features: features}),
    style: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: '#ffcc33'
            })
        })
    })
});
featureOverlay.setMap(map);

// var modify = new ol.interaction.Modify({
//     features: features,
//     // the SHIFT key must be pressed to delete vertices, so
//     // that new vertices can be drawn at the same position
//     // of existing vertices
//     deleteCondition: function (event) {
//         return ol.events.condition.shiftKeyOnly(event) &&
//             ol.events.condition.singleClick(event);
//     }
// });
// map.addInteraction(modify);
//
// var draw; // global so we can remove it later
// var typeSelect = document.getElementById('type');
//
// function addInteraction() {
//     draw = new ol.interaction.Draw({
//         features: features,
//         type: /** @type {ol.geom.GeometryType} */ (typeSelect.value)
//     });
//     map.addInteraction(draw);
// }


/**
 * Handle change event.
 */
// typeSelect.onchange = function () {
//     map.removeInteraction(draw);
//     addInteraction();
// };
//
// addInteraction();

// end draw

//begin animation


var moveFeature = function (event) {
    var vectorContext = event.vectorContext;
    var frameState = event.frameState;

    if (animating) {
        var elapsedTime = frameState.time - now;
        // here the trick to increase speed is to jump some indexes
        // on lineString coordinates
        var index = Math.round(speed * elapsedTime / 1000);

        if (index >= routeLength) {
            stopAnimation(true);
            return;
        }

        var currentPoint = new ol.geom.Point(routeCoords[index]);
        var feature = new ol.Feature(currentPoint);
        vectorContext.drawFeature(feature, styles.geoMarker);
    }
    // tell OpenLayers to continue the postcompose animation
    map.render();
};

function startAnimation() {
    if (animating) {
        stopAnimation(false);
    } else {
        animating = true;
        now = new Date().getTime();
        speed = speedInput.value;
        startButton.textContent = 'Cancel Animation';
        // hide geoMarker
        geoMarker.setStyle(null);
        // just in case you pan somewhere else
        map.getView().setCenter(center);
        map.on('postcompose', moveFeature);
        map.render();
    }
}


/**
 * @param {boolean} ended end of animation.
 */
function stopAnimation(ended) {
    animating = false;
    startButton.textContent = 'Start Animation';

    // if animation cancelled set the marker at the beginning
    var coord = ended ? routeCoords[routeLength - 1] : routeCoords[0];
    /** @type {ol.geom.Point} */ (geoMarker.getGeometry())
        .setCoordinates(coord);
    //remove listener
    map.un('postcompose', moveFeature);
}

startButton.addEventListener('click', startAnimation, false);

//end animation

// A bounce easing method (from https://github.com/DmitryBaranovskiy/raphael).
function bounce(t) {
    var s = 7.5625, p = 2.75, l;
    if (t < (1 / p)) {
        l = s * t * t;
    } else {
        if (t < (2 / p)) {
            t -= (1.5 / p);
            l = s * t * t + 0.75;
        } else {
            if (t < (2.5 / p)) {
                t -= (2.25 / p);
                l = s * t * t + 0.9375;
            } else {
                t -= (2.625 / p);
                l = s * t * t + 0.984375;
            }
        }
    }
    return l;
}

// An elastic easing method (from https://github.com/DmitryBaranovskiy/raphael).
function elastic(t) {
    return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
}

function onClick(id, callback) {
    document.getElementById(id).addEventListener('click', callback);
}


function flyTo(location, done) {
    var duration = 5000;
    var zoom = view.getZoom();
    var parts = 2;
    var called = false;

    function callback(complete) {
        --parts;
        if (called) {
            return;
        }
        if (parts === 0 || !complete) {
            called = true;
            done(complete);
        }
    }

    view.animate({
        center: location,
        duration: duration
    }, callback);
    view.animate({
        zoom: zoom - 1,
        duration: duration / 2
    }, {
        zoom: zoom,
        duration: duration / 2
    }, callback);
}

function animateTo(center, zoom) {
    var animateType = document.getElementById('animate-type');
    var animateDuration = document.getElementById('animate-duration').value * 1000;
    map.getView().setZoom(zoom == undefined ? 15 : zoom);
    switch (animateType.value) {
        case "Elastic":
            animateElastic(center, animateDuration);
            break;
        case "Bounce":
            animateBounce(center, animateDuration);
            break;
        case "Spin":
            animateSpin(center, animateDuration);
            break;
        case "Rotate":
            animateRotate(center, animateDuration);
            break;
        case "Fly":
            animateFly(center, animateDuration);
            break;
        default:
            animatePan(center, animateDuration);
            break;
    }
}

function animateBounce(center, duration) {
    view.animate({
        center: center,
        duration: duration,
        easing: bounce
    });
}

function animateElastic(center, duration) {
    view.animate({
        center: center,
        duration: duration,
        easing: elastic
    });
}

function animateSpin(center, duration) {
    view.animate({
        center: center,
        rotation: 2 * Math.PI,
        duration: duration
    });
}

function animatePan(center, duration) {
    view.animate({
        center: center,
        duration: duration
    });
}

function animateRotate(anchor, duration) {
    view.animate({
        rotation: view.getRotation() + 2 * Math.PI,
        anchor: anchor,
        duration: duration
    });
}

function animateFly(center, duration) {
    flyTo(center, duration, function () {
    });
}


function tour() {
    map.getView().setZoom(15);
    var locations = [];
    for (var i = 0; i < csdata.getZones().length; i++) {
        var z = csdata.getZones()[i];
        locations.push(ol.proj.fromLonLat([z.longitude, z.latitude]));
    }


    var index = -1;

    function next(more) {
        if (more) {
            ++index;
            if (index < locations.length) {
                var delay = index === 0 ? 0 : 8000;
                setTimeout(function () {
                    flyTo(locations[index], next);
                }, delay);
            } else {
                alert('Tour complete');
            }
        } else {
            alert('Tour cancelled');
        }
    }

    next(true);
}

onClick('tour', tour);

$('.ol-control').appendTo("#panel-map");


//markers

generateMarkers();

function generateMarkers() {
    for (var i = 0; i < csdata.getZones().length; i++) {
        var z = csdata.getZones()[i];
        generateMarkerZone(z);
    }
    for (var i = 0; i < csdata.getDevices().length; i++) {
        var d = csdata.getDevices()[i];
        generateMarkerDevice(d);
    }
    vectorLayer.getSource().changed();
    map.getView().setCenter(ol.proj.fromLonLat([z.longitude, z.latitude]));
    map.getView().setZoom(12);


// display popup on click

    var popup = new ol.Overlay.Popup();
    map.addOverlay(popup);

    map.on('click', function (evt) {

        if (map.getTarget().style.cursor == 'pointer') {
            var feature = map.forEachFeatureAtPixel(evt.pixel,
                function (feature, layer) {
                    return feature;
                });

            // var el = document.createElement("div");
            // el.id="popup-zone-wrapper";
            // $('#popup-zone').appendTo("#popup-zone-wrapper");
            // var title = document.createElement("h2");
            // title.innerHTML = feature.O.obj.name;
            // el.appendChild(title);
            // var content = document.createElement("p");
            // content.innerHTML = '<a href="#" data-action="yes">Yes</a>, <a href="#" data-action="no">No</a>';
            // el.appendChild(content);


            popup.show(evt.coordinate, $('#popup-zone').get(0));
            var z = feature.O.obj;
            $('#popup-zone-icon').removeClass().addClass(z.object == "zone" ? "ion-ios-location" : (z.type == "camera" ? "ion-ios-videocam" : "ion-ios-locked"));
            $('#popup-zone-name').html(z.name);
            $('#popup-zone-coordinates').html(z.longitude + ", " + z.latitude);
            var ev = [];
            if (z.object == "zone") {
                ev = csdata.getEventsByZone(z, 5);
                $('#pop-image>img').attr("src", "data/zones/" + z.id + ".jpg");
                console.log(z.name +' >> ' + map.getView().getZoom()+' >> ' + map.getView().calculateExtent(map.getSize()));
            }

            else ev = csdata.getEventsByDevice(z, 5);
            var htmlEv = "";
            for (i = 0; i < ev.length; i++) {
                htmlEv += "<li class='list-group-item list-item-sm'>" + ev[i].time + " " + ev[i].name + "</li>";
            }
            $('#popup-zone-events').html(htmlEv);

            $('#popup-zone').show();
            $("#popup-zone .nav-tabs-xs").tab();
            $('#popup-zone .nav-tabs-xs >li > a').click(function (e) {
                e.preventDefault()
                $(this).tab('show')
            })
            flash(evt);
        }
    });

    $(map.getViewport()).on('mousemove', function (e) {
        var pixel = map.getEventPixel(e.originalEvent);
        var hit = map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            return true;
        });
        if (hit) {
            map.getTarget().style.cursor = 'pointer';
        } else {
            map.getTarget().style.cursor = '';
        }
    });

    // // change mouse cursor when over marker
    // $(map.getViewport()).on('mousemove', function(e) {
    //     var pixel = map.getEventPixel(e.originalEvent);
    //     var hit = map.forEachFeatureAtPixel(pixel, function(feature, layer) {
    //         return true;
    //     });
    //     if (hit) {
    //         map.getTarget().style.cursor = 'pointer';
    //     } else {
    //         map.getTarget().style.cursor = '';
    //     }
    // });


}

function generateMarkerZone(z) {
    var zoneMarker = new ol.Feature({
        type: 'iconZone',
        geometry: new ol.geom.Point(ol.proj.fromLonLat([z.longitude, z.latitude])),
        obj: z
    });
    vectorLayer.getSource().addFeature(zoneMarker);

}
function generateMarkerDevice(d) {
    var deviceMarker = new ol.Feature({
        type: d.type == 'camera' ? 'iconCamera' : 'iconDoorClosed',
        geometry: new ol.geom.Point(ol.proj.fromLonLat([d.longitude, d.latitude])),
        obj: d
    });
    vectorLayer.getSource().addFeature(deviceMarker);
}


var markerLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [routeFeature, geoMarker, startMarker, endMarker]
    }),
    style: function (feature) {
        // hide geoMarker if animation is active
        if (animating && feature.get('type') === 'geoMarker') {
            return null;
        }
        return styles[feature.get('type')];
    }
});


function addRandomFeature() {
    var x = Math.random() * 360 - 180;
    var y = Math.random() * 180 - 90;
    var geom = new ol.geom.Point(ol.proj.transform([x, y],
        'EPSG:4326', 'EPSG:3857'));
    var feature = new ol.Feature(geom);
    vectorLayer.getSource().addFeature(feature);
}

var duration = 1000;
function flash(feature) {
    var start = new Date().getTime();
    var listenerKey;

    function animate(event) {
        var vectorContext = event.vectorContext;
        var frameState = event.frameState;

        var geom = new ol.geom.Point(feature.coordinate);
        var flashGeom = geom.clone();

        var elapsed = frameState.time - start;
        var elapsedRatio = elapsed / duration;
        // radius will be 5 at start and 30 at end.
        var radius = ol.easing.easeOut(elapsedRatio) * 25 + 5;
        var opacity = ol.easing.easeOut(1 - elapsedRatio);

        var style = new ol.style.Style({
            image: new ol.style.Circle({
                radius: radius,
                snapToPixel: false,
                stroke: new ol.style.Stroke({
                    color: 'rgba(255, 0, 0, ' + opacity + ')',
                    width: 0.25 + opacity
                })
            })
        });

        vectorContext.setStyle(style);
        vectorContext.drawGeometry(flashGeom);
        if (elapsed > duration) {
            ol.Observable.unByKey(listenerKey);
            return;
        }
        // tell OpenLayers to continue postcompose animation
        map.render();
    }

    listenerKey = map.on('postcompose', animate);
}


vectorLayer.getSource().on('addfeature', function (e) {
    flash(e.feature);
});

function flashXtimes(coordinate) {
    var t = 20;
    window.setInterval(function () {
        if (t > 0) {
            flash2(coordinate);
            t--;
        }
        else return;
    }, 500);
}

function flash2(coordinate) {
    var start = new Date().getTime();
    var listenerKey;

    function animate(event) {
        var vectorContext = event.vectorContext;
        var frameState = event.frameState;

        var geom = new ol.geom.Point(coordinate);
        var flashGeom = geom.clone();

        var elapsed = frameState.time - start;
        var elapsedRatio = elapsed / duration;
        // radius will be 5 at start and 30 at end.
        var radius = ol.easing.easeOut(elapsedRatio) * 25 + 15;
        var opacity = ol.easing.easeOut(1 - elapsedRatio);

        var style = new ol.style.Style({
            image: new ol.style.Circle({
                radius: radius,
                snapToPixel: false,
                stroke: new ol.style.Stroke({
                    color: 'rgba(255, 0, 0, ' + opacity + ')',
                    width: 4 + opacity
                })
            })
        });

        vectorContext.setStyle(style);
        vectorContext.drawGeometry(flashGeom);
        if (elapsed > duration) {
            ol.Observable.unByKey(listenerKey);
            return;
        }
        // tell OpenLayers to continue postcompose animation
        map.render();
    }

    listenerKey = map.on('postcompose', animate);
}

// window.setInterval(addRandomFeature, 1000);
// console.log(map.getView().calculateExtent(map.getSize()));