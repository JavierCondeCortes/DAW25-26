import { AbstractControl,ValidationErrors } from "@angular/forms";
export class ValidacionesPropias {
    static mupliplo5(control: AbstractControl): ValidationErrors | null{
        let numero = parseInt(control.value)
        if(numero%5==0){
            return null
        }else{
            return {mupliplo5: true}
        }
    }
}
