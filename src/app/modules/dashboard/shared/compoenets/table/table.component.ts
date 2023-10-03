import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: any
  @Input() model: any
  @Input() name?: string
  constructor(){}
  ngOnInit(): void {
  }
  getAttributeNames() {
   // const nestedObject = this.model; // Assuming the nested object is a property of the childModel
    //return nestedObject=== '[object Object]'? Object.keys(nestedObject): Object.keys(this.model);
  
   return Object.keys(this.model);
  }
  removeRow(id:number){
  
  }
}
