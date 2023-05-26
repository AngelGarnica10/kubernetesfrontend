import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  multiple: boolean;
  crop: boolean;
}

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent {
  isHovering = false;
  files: File[] = [];
  imageFile!: File;
  isError!: boolean;
  filesURLs: string[] = [];

  constructor(
    private dialogRef: MatDialogRef<FilesUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){}

  toggleHover(event: boolean): void {
    this.isHovering = event;
  }

  onDrop(files: FileList): void {
    this.dropGeneral(files);
  }

  onDropFile(event: any): void {
    this.dropGeneral(event.target.files);
  }

  dropGeneral(files: FileList): void {
    this.isError = false;
    if(this.data.crop && files.length > 1) {
      this.isError = true;
      return;
    }

    for (let index = 0; index < files.length; index++) {
      this.files.push(files[index] as File);
    }

    console.log(files);
  }

  onUploadCompleted(url: string): void {
    this.filesURLs.push(url);
  }

  onComplete(): void {
    const response = this.data.multiple ? this.filesURLs : this.filesURLs[0];
    this.dialogRef.close(response);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
