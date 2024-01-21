import { Component } from '@angular/core';

@Component({
  selector: 'app-edclub',
  templateUrl: './edclub.component.html',
  styleUrls: ['./edclub.component.scss']
})
export class EdclubComponent {

  selectedIndex: number = 0;


  public onTabSwitch(tabName: string) {
    console.log(this.selectedIndex);
    if (this.selectedIndex == 0) {
      console.log('Called TAB 1');
    } else if (this.selectedIndex == 1) {
      console.log('Called TAB 2');
    
    } else {

    }
  }

}
