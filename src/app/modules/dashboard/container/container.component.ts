import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/products/models/product';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  pro:Product=new Product()
  ngOnInit(): void {
    this.pro.categoryName="sdfsf"
    throw new Error('Method not implemented.');
  }

}
