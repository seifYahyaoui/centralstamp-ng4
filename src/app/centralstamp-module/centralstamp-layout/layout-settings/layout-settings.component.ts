import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-settings',
  templateUrl: './layout-settings.component.html',
  styleUrls: ['./layout-settings.component.css']
})
export class LayoutSettingsComponent implements OnInit {
  enableSettings : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  hideSettings(){
    this.enableSettings = !this.enableSettings;
  }

}
