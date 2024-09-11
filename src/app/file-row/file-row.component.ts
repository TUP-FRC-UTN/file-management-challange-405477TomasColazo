import { Component } from '@angular/core';
import { FileOwnersComponent } from '../file-owners/file-owners.component';

@Component({
  selector: 'app-file-row',
  standalone: true,
  imports: [FileOwnersComponent],
  templateUrl: './file-row.component.html',
  styleUrl: './file-row.component.css',
})
export class FileRowComponent {}
