/**
 * Created by nazgul on 28/06/17.
 */

// generateTimelineEvents();

function generateTimelineEvents(){
    for (var i = 0; i < csdata.getDevices().length; i++) {

        var dd = csdata.getDevices()[i];
        var $li = $("<div>", {id: "timelineevents-"+dd.id, "class": "timelineevents-element"});
        var $title = $("<div>", {id: "timelineevents-title-"+dd.id, "class": "timelineevents-title"});
        var $line = $("<div>", {id: "timelineevents-line-"+dd.id, "class": "timelineevents-line"});
        $title.html(dd.name);
        $li.append($title);
        $li.append($line);
        $("#timeline-events").append($li);

    }

}



var numberOfGroups = csdata.getDevices().length;
var groups = new vis.DataSet();
var items = new vis.DataSet();
for (var i = 0; i < numberOfGroups; i++) {
    var dd = csdata.getDevices()[i];
    groups.add({
        id: dd.id,
        content: dd.name
    })
}
var numberOfItems = csdata.getEvents().length;
for (var i = 0; i < numberOfItems; i++) {
    var ee = csdata.getEvents()[i];
    items.add({
        id: ee.id,
        group: ee.deviceid,
        start: new Date(ee.time),
        content: "",
        title: '<div>'+ee.name+' ['+ee.time+']'+'</div>',
        'className': ee.alarmid == "" ? "nothing" : alert_type[parseInt(ee.alarmid)].type
    });
}


// // create items
//
// var items = new vis.DataSet();
//
// var itemsPerGroup = Math.round(numberOfItems/numberOfGroups);
//
// for (var truck = 0; truck < numberOfGroups; truck++) {
//     var date = new Date();
//     for (var order = 0; order < itemsPerGroup; order++) {
//         date.setHours(date.getHours() +  4 * (Math.random() < 0.2));
//         var start = new Date(date);
//
//         date.setHours(date.getHours() + 2 + Math.floor(Math.random()*4));
//         var end = new Date(date);
//
//         var orderIndex = order + itemsPerGroup * truck
//         items.add({
//             id: orderIndex,
//             group: truck,
//             start: start,
//             end: end,
//             content: 'Order ' + orderIndex
//         });
//     }
// }

// specify options
var options = {
    // type: 'point',
    stack: true,
    verticalScroll: true,
    zoomKey: 'ctrlKey',
    maxHeight: 200,
    start: new Date(),
    zoomMax: 1000 * 60 * 60 * 24,
    zoomMin: 1000 * 60,
    "height": "auto",
    "minHeight": "100%"
};

// create a Timeline

options1 = jQuery.extend(options, {});
var container1 = document.getElementById('mytimeline1');
timeline1 = new vis.Timeline(container1, null, options1);
timeline1.setGroups(groups);
timeline1.setItems(items);


$(".vis-panel.vis-left.vis-vertical-scroll").niceScroll({
    cursorcolor: "#0c80df",
    cursorwidth: "4px",
    background: "rgba(128,128,128,0.5)",
    cursorborder: "0",
    cursorborderradius: 0,
    autohidemode: 'leave',
    horizrailenabled:false
});
