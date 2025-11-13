import { Component,Input } from '@angular/core';
//importante agregar el Input I mayuscula

@Component({
  selector: 'app-padre-hijo',
  imports: [],
  templateUrl: './padre-hijo.html',
  styleUrl: './padre-hijo.css',
})
export class PadreHijo {
  @Input() valor: string = "";
}
