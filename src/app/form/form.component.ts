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
import { NONE_TYPE } from '@angular/compiler';
import { FileOwnersComponent } from '../file-owners/file-owners.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    OwnerSelectComponent,
    FileOwnersComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnChanges {
  file: FileItem = {
    id: '',
    name: '',
    creation: new Date(0),
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
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });
    } else {
      this.sendEmit.emit(this.file);
      console.log('Formulario enviado:', this.file);
    }
  }

  addOwner(owner: FileOwner) {
    if (!this.file.owners.includes(owner)) {
      this.file.owners.push(owner);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  isInvalidDate(): boolean {
    return this.file.creation.getTime() === 0; // Considera new Date(0) como inválida
  }
}
