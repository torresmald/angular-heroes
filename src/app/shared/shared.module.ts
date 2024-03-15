import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';



@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ErrorPageComponent]
})
export class SharedModule { }
