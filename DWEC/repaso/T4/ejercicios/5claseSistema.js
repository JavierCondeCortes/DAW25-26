class Usuario{

    #contraseña
    constructor(nombre,contraseña){
        this.baneado=false;
        this.nombre = nombre;
        this.#contraseña = contraseña;
    }
    validarPassword(contraseña){
        if(this.#contraseña===contraseña){
            console.log('contraseñas coinciden')
        }else{
            console.log('contraseñas no coinciden')
        }
    }
}

class Administrador extends Usuario{
    constructor(nombre,contraseña){
        super(nombre,contraseña);
    }
    banear(usuario){
        usuario.baneado=true;
        console.log(`El usuario ${usuario.nombre} ha sido baneado.`);
    }
}

console.log('user')
const u1 = new Usuario('pepe','12345');

u1.validarPassword('12345');
u1.validarPassword('12325');
console.log(u1.baneado);

console.log('admin')
const ad1 = new Administrador('padro','12345');
ad1.validarPassword('12345')
ad1.banear(u1);
console.log(u1.baneado);