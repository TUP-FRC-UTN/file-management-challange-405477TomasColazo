import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-actions-var',
  standalone: true,
  imports: [],
  templateUrl: './file-actions-var.component.html',
  styleUrl: './file-actions-var.component.css',
})
export class FileActionsVarComponent {
  nuevo: boolean = true;
  @Output() cambiarPantalla = new EventEmitter();
  nuevoForm() {
    this.cambiarPantalla.emit();
    console.log(this.nuevo);
    this.nuevo = !this.nuevo;
    console.log(this.nuevo);
  }
}
