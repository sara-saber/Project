import { CardComponent } from './components/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  exports:[
    HttpClientModule,
    CardComponent,
    NgxPaginationModule,
  ]
})
export class SharedModule { }
