import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tablanro',
  imports: [],
  templateUrl: './tablanro.html',
  styleUrl: './tablanro.css',
})
export class Tablanro {

  nro = 0;
  tabla='';

constructor(private activatedRoot: ActivatedRoute){
  this.activatedRoot.paramMap.subscribe((parametros: ParamMap) => {
    this.nro = parseInt(parametros.get("nro")!);
    this.tabla='';
    for(let i=1; i<=parseInt(parametros.get("terminos")!);i++){
      let t = i * this.nro;
      this.tabla += t + "  -  ";
    }
  })
}

}
