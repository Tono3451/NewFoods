import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-get-image',
  templateUrl: './get-image.component.html',
  standalone: true,
  styleUrls: ['./get-image.component.css']
})
export class GetImageComponent implements AfterViewInit {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('dropZone') dropZone!: ElementRef;
  @ViewChild('uploadMessage') uploadMessage!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const fileInput = this.fileInput.nativeElement;
    const dropZone = this.dropZone.nativeElement;
    const uploadMessage = this.uploadMessage.nativeElement;

    fileInput.addEventListener('change', (event: Event) => {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        this.showUploadMessage(uploadMessage);
      }
    });

    dropZone.addEventListener('dragover', (event: DragEvent) => {
      event.preventDefault();
      dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (event: DragEvent) => {
      event.preventDefault();
      dropZone.classList.remove('dragover');
      if (event.dataTransfer && event.dataTransfer.files.length > 0) {
        this.showUploadMessage(uploadMessage);
      }
    });
  }

  private showUploadMessage(uploadMessage: HTMLElement) {
    uploadMessage.style.display = 'block';
  }
}
