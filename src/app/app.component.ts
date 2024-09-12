import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { FileActionsVarComponent } from './file-actions-var/file-actions-var.component';
import { FileRowComponent } from './file-row/file-row.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FileActionsVarComponent,
    FileRowComponent,
    FormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;

  title = 'file-management';

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
  }

  eliminarFile(index: number) {
    this.files.splice(index, 1);
  }

  ngOnInit() {
    this.ordenarLista(this.files);
  }
}
