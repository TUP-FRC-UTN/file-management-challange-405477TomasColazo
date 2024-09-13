import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { FileActionsVarComponent } from './file-actions-var/file-actions-var.component';
import { FileRowComponent } from './file-row/file-row.component';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FileActionsVarComponent,
    FileRowComponent,
    FormComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;

  title = 'file-management';
  showForm: boolean = false;
  selectedIndexFiles: number[] = [];

  changeForm() {
    this.showForm = !this.showForm;
  }

  onFileCheked(event: { index: number; checked: boolean }) {
    console.log(event);
    if (event.checked) {
      this.selectedIndexFiles.push(event.index);
    } else {
      this.selectedIndexFiles = this.selectedIndexFiles.filter(
        (index) => index !== event.index
      );
    }
  }

  ordenarLista(array: FileItem[]) {
    array.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type - b.type;
      }
      return a.name.localeCompare(b.name);
    });
  }

  pushFile(file: FileItem) {
    this.files.push(file);
    this.ordenarLista(this.files);
    this.changeForm();
  }

  eliminarFile(index: number) {
    this.files.splice(index, 1);
  }

  ngOnInit() {
    this.ordenarLista(this.files);
  }
  borrarFiles() {
    console.log(this.selectedIndexFiles);
    this.files = this.files.filter(
      (_, index) => !this.selectedIndexFiles.includes(index)
    );
    this.selectedIndexFiles = [];
    console.log(this.selectedIndexFiles);
  }
}
