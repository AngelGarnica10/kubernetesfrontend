import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploadComponent } from './files-upload.component';
import { FilesUploadDirective } from '../files-upload.directive';



@NgModule({
  declarations: [
    FilesUploadComponent,
    FilesUploadDirective
  ],
  imports: [
    CommonModule
  ]
})
export class FilesUploadModule { }
