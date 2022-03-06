import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BaseComponent } from './components/base/base.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
})
export class CoreModule { }
