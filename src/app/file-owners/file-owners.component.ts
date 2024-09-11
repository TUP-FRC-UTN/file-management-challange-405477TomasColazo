import { Component, Input } from '@angular/core';
import { FileOwner } from '../../models/file.item.model';

@Component({
  selector: 'app-file-owners',
  standalone: true,
  imports: [],
  templateUrl: './file-owners.component.html',
  styleUrl: './file-owners.component.css',
})
export class FileOwnersComponent {
  @Input() owner!: FileOwner;
}
