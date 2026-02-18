function f1(nombre,edad){
    console.log(`${nombre} tiene ${edad} años`)
}

function f2(nombre,edad){
    console.log(`${arguments[0]} tiene ${arguments[1]} años`)
}

function f3(nombre = 'luis' ,edad = 18){
    console.log(`${nombre} tiene ${edad} años`)
}

f1('pepe')
f1('pepe',10)

f2('alberto')
f2('alberto',50)

f3()
f3('javier')