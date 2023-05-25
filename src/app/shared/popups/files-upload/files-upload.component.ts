import { Component } from '@angular/core';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent {
  isHovering = false;

  toggleHover(event: boolean): void {
    this.isHovering = event;
  }
}
