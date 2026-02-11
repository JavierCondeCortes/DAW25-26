import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Perso {
    static mayorCero(control: AbstractControl): ValidationErrors | null {
        let numero = parseInt(control.value);
        if (numero < 0) {
            return { mayorCero: true }
        } else {
            return null
        }
    }
}
