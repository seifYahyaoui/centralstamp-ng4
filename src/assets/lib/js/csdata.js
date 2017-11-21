/**
 * Created by talel on 07/06/17.
 */

(function ($) {
    $.extend(true, window, {
        CS: {
            Data: Data
        }
    });

    function Data(options) {
        var zones = [];
        var devices = [];
        var alarms = [];
        var events = [];

        $.extend(this, {
            // methods
            "setZones": setZones,
            "setDevices": setDevices,
            "setAlarms": setAlarms,
            "getZones": getZones,
            "getDevices": getDevices,
            "getAlarms": getAlarms,
            "getEvents": getEvents,
            "setEvents": setEvents,
            "getEventsByZone": getEventsByZone,
            "getEventsByDevice": getEventsByDevice,
            "generateEvent": generateEvent,
            "getEventsByAlarm": getEventsByAlarm,
            "getEventById": getEventById

        });

        function setZones(data) {
            zones = data;
            refresh();
        }

        function getZones() {
            return zones;
        }

        function setDevices(data) {
            devices = data;
            refresh();
        }

        function getDevices() {
            return devices;
        }

        function setAlarms(data) {
            alarms = data;
            refresh();
        }

        function getAlarms() {
            return alarms;
        }

        function setEvents(data) {
            events = data;
            refresh();
        }

        function getEvents() {
            return events;
        }

        function getEventsByAlarm(a, clear) {
            var res = [];
            if (a == null || a == undefined) {
                for (i = 0; i < events.length; i++) {
                    if ("" != events[i].alarmid && clear == events[i].clear)
                        res.push(events[i]);
                }
            } else {
                for (i = 0; i < events.length; i++) {
                    if (a == events[i].alarmid && clear == events[i].clear)
                        res.push(events[i]);
                }
            }

            return res;
        }

        function getEventById(id) {
            for (i = 0; i < events.length; i++) {
                if (events[i].id == id)
                    return events[i];
            }

            return null;
        }


        function getEventsByZone(zone, limit) {
            var res = [];
            for (i = 0; i < events.length; i++) {
                if (zone.id == events[i].zoneid)
                    res.push(events[i]);

                if (res.length == limit)
                    break;
            }
            return res;
        }

        function getEventsByDevice(device, limit) {
            var res = [];
            for (i = 0; i < events.length; i++) {
                if (device.id == events[i].deviceid)
                    res.push(events[i]);

                if (res.length == limit)
                    break;
            }
            return res;
        }


        var zonesWithDevices;
        var millisrange = 5 * 60 * 1000 - 14;
        var maxevents = 500;

        function refresh() {
            // zonesWithDevices = getZonesWithDevices();
            // if (zones.length > 0 && devices.length > 0 && alarms.length > 0) {
            //     var ref = Date.now() - millisrange * maxevents;
            //     var ev = [];
            //     for (var i = 0; i < maxevents; i++) {
            //         ev[i] = generateEvent(i, new Date(ref + millisrange * i));
            //     }
            //     ev.reverse();
            //     console.log("EVENTS > " + JSON.stringify(ev));
            // }
        }

        function generateEvent(ii, ddate) {
            var z = genZone(ii);
            var d = genDevice(ii, z);
            var a = genAlarm(ii);
            var e = {
                "id": ii,
                "name": a == undefined
                    ? (d.type == "camera" ? "Face recognition" : "Open")
                    : (d.type == "camera" ? "Motion detection" : "Still Open"),
                "zoneid": z.id,
                "zonename": z.name,
                "deviceid": d.id,
                "devicename": d.name,
                "devicetype": d.type,
                "alarmid": a == undefined ? "" : a.id,
                "alarmname": a == undefined ? "" : a.name,
                "desc": "event description for this event",
                "time": getFormattedDate(ddate),
                "clear": false
            }
            return e;
        }

        function genZone(i) {
            if (zonesWithDevices == undefined)
                zonesWithDevices = getZonesWithDevices();
            return zonesWithDevices[i % zonesWithDevices.length];
        }

        function genDevice(i, z) {
            var devs = getChildrenDevices(z);
            return devs[i % devs.length];

        }

        function genAlarm(i) {
            var notRandomNumbers = [undefined, undefined, 1, undefined, undefined, 0, undefined, undefined, 1, undefined, undefined, undefined, undefined, 1, undefined, undefined, 0, undefined, undefined, 2, undefined, undefined, 2, undefined, 0, undefined, 2, undefined, undefined];
            var idx = Math.floor(Math.random() * notRandomNumbers.length);
            return alarms[notRandomNumbers[idx]];
        }

        // function genAlarm(i) {
        //     if (i % 5 == 3 || i % 3 == 4 || i % 6 == 5 || i % 7 == 4 || i % 8 == 4 || i % 9 == 3)
        //         return undefined;
        //     return alarms[i % alarms.length];
        // }

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

        function getChildrenDevices(zone) {
            var res = [];
            for (var i = 0; i < devices.length; i++) {
                var dd = devices[i];
                if (dd.zone == zone.id) {
                    res.push(dd);
                }
            }
            return res;
        }

        function getZonesWithDevices() {
            var res = [];
            for (var i = 0; i < devices.length; i++) {
                res.push(zones[devices[i].zone]);
            }
            return res;
        }

    }


})(jQuery);

