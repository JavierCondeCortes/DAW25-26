export class Academia{
    constructor(){
        this.bailarines = new Map
    }

    inscribirse(Bailarin){
        if(this.bailarines.has(Bailarin.dni)){
            return 'DNI ya existente'
        }else{
            this.bailarines.set(Bailarin.dni,Bailarin)
        }
    }

    desinscribirse(Bailarin){
        if(this.bailarines.has(dni)){
            this.bailarines.delete(Bailarin.dni)
        }else{
            return 'el bailarin no existe'
        }
    }
}