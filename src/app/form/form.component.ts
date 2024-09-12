import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';
import { OWNERS } from '../../data/file.storage';
import { OwnerSelectComponent } from '../owner-select/owner-select.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, OwnerSelectComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnChanges {
  file: FileItem = {
    id: '',
    name: '',
    creation: new Date(),
    owners: [],
    type: FileType.FOLDER,
  };

  @Input() foldersList?: FileItem[];
  fileTypes = Object.keys(FileType).filter((key) => isNaN(Number(key)));

  owners = OWNERS;

  getFileTypeValue(type: string): number {
    return FileType[type as keyof typeof FileType];
  }

  @Output() sendEmit = new EventEmitter<FileItem>();

  sendForm(form: NgForm) {
    if (form.valid) {
      this.sendEmit.emit(this.file);
    }
  }

  addOwner(owner: FileOwner) {
    this.file.owners.push(owner);
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
}
