
/**
 * Created by seif on 11/1/17.
 */



export enum DEVICE{
  CAMERA,
  MOTION_DETECTION
}


export class TreeDeviceNode{
  type:DEVICE;
  name: string; constructor(name:string, type:DEVICE){
  this.name = name;
  this.type = type;
}
}

export class TreeZoneNode {
  name:string;
  treeZoneChilds?: TreeZoneNode[] = [];
  treeDevices?: TreeDeviceNode[] = [];
  display: boolean = true;

  constructor(name:string){
    this.name = name;
  }
  addZoneNode(zoneNode: TreeZoneNode){
    this.treeZoneChilds.push(zoneNode);
  }

  addZoneNodes(...zoneNodes: TreeZoneNode[]){
    this.treeZoneChilds = this.treeZoneChilds.concat(zoneNodes);
  }

  addZoneDevice(device: TreeDeviceNode){
    this.treeDevices.push(device);
  }

  addZoneDevices(...devices: TreeDeviceNode[]){
    this.treeDevices = this.treeDevices.concat(devices);
  }
}
export class TreeZoneUI{
  treeNodes: TreeZoneNode[] = [];
}

export const zones : TreeZoneNode[] = [];

const zoneTunisie : TreeZoneNode = new TreeZoneNode('Tunisie');
const zoneTunis: TreeZoneNode = new TreeZoneNode('Tunis');
zoneTunisie.addZoneNode(zoneTunis)
const zonecharguia: TreeZoneNode = new TreeZoneNode('Charguia');
zoneTunis.addZoneNode(zonecharguia);
const charguiadevice1: TreeDeviceNode = new TreeDeviceNode('capteur1',DEVICE.CAMERA);
const charguiadevice2: TreeDeviceNode = new TreeDeviceNode('capteur1',DEVICE.CAMERA);
const charguiadevice3: TreeDeviceNode = new TreeDeviceNode('capteur1',DEVICE.CAMERA);
const charguiadevice4: TreeDeviceNode = new TreeDeviceNode('capteur1',DEVICE.CAMERA);
const charguiadevice5: TreeDeviceNode = new TreeDeviceNode('capteur1',DEVICE.MOTION_DETECTION);
zonecharguia.addZoneDevices(charguiadevice1,charguiadevice2,charguiadevice3,charguiadevice4,charguiadevice5);

const tunisdevice1: TreeDeviceNode = new TreeDeviceNode('capteur1',DEVICE.MOTION_DETECTION);
const tunisdevice2: TreeDeviceNode = new TreeDeviceNode('capteur1',DEVICE.CAMERA);
const tunisdevice3: TreeDeviceNode = new TreeDeviceNode('capteur1',DEVICE.CAMERA);
zoneTunis.addZoneDevices(tunisdevice1,tunisdevice2,tunisdevice3);

const zoneAriana: TreeZoneNode = new TreeZoneNode('Ariana');
const arianadevice1: TreeDeviceNode = new TreeDeviceNode('capteur1',DEVICE.CAMERA);
const arianadevice2: TreeDeviceNode = new TreeDeviceNode('capteur1',DEVICE.MOTION_DETECTION);
const arianadevice3: TreeDeviceNode = new TreeDeviceNode('capteur1',DEVICE.MOTION_DETECTION);
zoneTunis.addZoneNode(zoneAriana);
zoneAriana.addZoneDevices(arianadevice1,arianadevice2,arianadevice3);

const zoneBenarous: TreeZoneNode = new TreeZoneNode('Ben arous');
const zoneSiliana: TreeZoneNode = new TreeZoneNode('Siliana');
const zoneBeja: TreeZoneNode = new TreeZoneNode('Beja');
const zoneSousse: TreeZoneNode = new TreeZoneNode('Sousse');
const zoneNabeul: TreeZoneNode = new TreeZoneNode('Nabeul');
const zoneKef: TreeZoneNode = new TreeZoneNode('Kef');
zoneTunisie.addZoneNodes(zoneBenarous,zoneSiliana,zoneBeja,zoneSousse,zoneNabeul,zoneKef);

zones.push(zoneTunisie);

export const treeUI : TreeZoneUI = {
  treeNodes : zones
};
