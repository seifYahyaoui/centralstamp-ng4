/**
 * Created by talel on 07/06/17.
 */

function Event(id, zoneid, zone, device, time, desc, alarm) {
    this.id = id;
    this.zoneid = zoneid;
    this.zonename = zonename;
    this.deviceid = deviceid;
    this.devicename = devicename;
    this.time = time;
    this.desc = desc;
    this.alarmid = alarmid;
    this.alarmname = alarmname;
}

function Alarm(id, name, level) {
    this.id = id;
    this.name = name;
    this.level = level;
}

function Zone(id, name, parent) {
    this.id = id;
    this.name = name;
    this.parent = parent;
    this.longitude = longitude;
    this.latitude = latitude;
}

function Device(id, name, zone, longitude, latitude) {
    this.id = id;
    this.name = name;
    this.zone = zone;
    this.longitude = longitude;
    this.latitude = latitude;
}

function DataItem(i) {
    this.num = i;
    this.id = "id_" + i;
    this.percentComplete = Math.round(Math.random() * 100);
    this.effortDriven = (i % 5 == 0);
    this.time = getFormattedDate(new Date());
    this.title = "Event " + i;
    this.duration = "5 days";
}