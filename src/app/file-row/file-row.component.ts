import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileOwnersComponent } from '../file-owners/file-owners.component';
import { FileItem } from '../../models/file.item.model';
import { CommonModule, DatePipe } from '@angular/common';
import { FileType } from '../../models/file.item.model';

@Component({
  selector: 'app-file-row',
  standalone: true,
  imports: [FileOwnersComponent, DatePipe, CommonModule],
  templateUrl: './file-row.component.html',
  styleUrl: './file-row.component.css',
})
export class FileRowComponent {
  @Input() file!: FileItem;
  FileType = FileType;
  @Input() index!: number;
  @Output() fileChecked = new EventEmitter<{
    index: number;
    checked: boolean;
  }>();

  onCheckboxChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.fileChecked.emit({ index: this.index, checked: isChecked });
  }
}
