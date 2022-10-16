import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    NgbModule,


  ]
})
export class HomeModule { }
