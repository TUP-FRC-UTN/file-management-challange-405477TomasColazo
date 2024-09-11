import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { FileActionsVarComponent } from './file-actions-var/file-actions-var.component';
import { FileRowComponent } from './file-row/file-row.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FileActionsVarComponent, FileRowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
}
