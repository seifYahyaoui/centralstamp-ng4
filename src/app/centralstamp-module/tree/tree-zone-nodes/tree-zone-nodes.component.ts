import {Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck} from '@angular/core';
import {TreeZoneNode} from "../model/tree-model";

@Component({
  selector: 'app-tree-zone-nodes',
  templateUrl: './tree-zone-nodes.component.html',
  styleUrls: ['./tree-zone-nodes.component.css']
})
export class TreeZoneNodesComponent implements OnInit {

  @Input()
  treeZoneNodes: TreeZoneNode[];
  constructor() {
  }

  ngOnInit() {
  }
}
