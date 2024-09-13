import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileOwner } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owner-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './owner-select.component.html',
  styleUrl: './owner-select.component.css',
})
export class OwnerSelectComponent {
  @Input() ownerList!: FileOwner[];
  selectedOwner: FileOwner | null = null;
  @Output() sendOwnerEmit = new EventEmitter<FileOwner>();

  sendOwner() {
    if (this.selectedOwner != null) {
      this.sendOwnerEmit.emit(this.selectedOwner);
    }
    this.selectedOwner = null;
  }
}
