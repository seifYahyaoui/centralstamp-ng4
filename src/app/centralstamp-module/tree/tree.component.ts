import { Component, OnInit } from '@angular/core';
import {DEVICE,TreeDeviceNode,TreeZoneNode,zones,TreeZoneUI,treeUI} from './model/tree-model'
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  treeUI : TreeZoneUI = treeUI;
  constructor() { }

  ngOnInit() {
    this.verifyRecurs(treeUI.treeNodes);
  }

  verifyRecurs(treeZones: TreeZoneNode[]){
    treeZones.forEach(
      n=>{
        console.log(n.name);
        n.treeDevices.forEach(
          d => console.log(d.name)
        );
        if(n.treeZoneChilds.length >0 ){
          this.verifyRecurs(n.treeZoneChilds);
        }
      }
    );
  }

}
