let texto = "los frapuchinos que navegaron hasta tordesillas no llegaron 123 navegando devido a que los 3 frapuchinos se derritieron";

//expresiones regulares

//marca si hay numeros en el texto
console.log(texto.match(/[0-9]/)); //null en el caso de que el texto no tenga numero
//(1) ['1', index: 60, input: 'los frapuchinos que navegaron hasta tordesill…o devido a que los frapuchinos se derritieron', groups: undefined]

console.log(texto.match(/[0-9]/g)); //null en el caso de que el texto no tenga numero
//(3) ['1', '2', '3']


//identificacdor de cuando empieza por.. ^
console.log(texto.match(/^apu/))
//null
console.log(texto.match(/^los/))
//['los', index: 0, input: 'los frapuchinos que navegaron hasta tordesill…o devido a que los frapuchinos se derritieron', groups: undefined]


//muestra que contiene 0 o mas caracteres... .*
console.log(texto.match(/.*2/))
//(1) ['los frapuchinos que navegaron hasta tordesillas no llegaron 123 navegando devido a que los 2', index: 0, input: 'los frapuchinos que navegaron hasta tordesill…devido a que los 2 frapuchinos se derritieron', groups: undefined]
console.log(texto.match(/.*frapuchino/))
//['los frapuchinos que navegaron hasta tordesillas n…egaron 123 navegando devido a que los frapuchino', index: 0, input: 'los frapuchinos que navegaron hasta tordesill…o devido a que los frapuchinos se derritieron', groups: undefined]


// un or |
console.log(texto.match(/[4-7]|.*o/))
//(1) ['los frapuchinos que navegaron hasta tordesillas n…ndo devido a que los 2 frapuchinos se derritiero', index: 0, input: 'los frapuchinos que navegaron hasta tordesill…devido a que los 2 frapuchinos se derritieron', groups: undefined]
console.log(texto.match(/z|[3-9]/g))
//(2) ['3', '3']

//cuantificadores
console.log(texto.match(/2+/))
//(1) ['2', index: 61, input: 'los frapuchinos que navegaron hasta tordesill…devido a que los 3 frapuchinos se derritieron', groups: undefined]

//los parentesis son de caracteres juntos {}
console.log(texto.match(/[3]{2,}/))
//null
console.log(texto.match(/(frapuchinos){2}/)) //nos da null porque no es frapuchinosfrapuchinos, en cambio con + funciona
//null
console.log(texto.match(/(frapuchinos)+/)) //en cambio con + funciona
// (2) ['frapuchinos', 'frapuchinos', index: 4, input: 'los frapuchinos que navegaron hasta tordesill…devido a que los 3 frapuchinos se derritieron', groups: undefined]

console.log(texto.match(/[2,3]{2}/))
//(1) ['23', index: 61, input: 'los frapuchinos que navegaron hasta tordesill…devido a que los 3 frapuchinos se derritieron', groups: undefined]

//concatenar expresiones... "."
console.log(texto.match(/(^los){1}(.[123]{1})/))
//empiezan por "los" y luego mira si hay un patron de 0 o mas caracteres con caracteres entre "0-9"
console.log(texto.match(/^los.*([0-9]+)/));

console.log(texto.match(/los\s[0-9]+/));
//(1) ['los 3', index: 87, input: 'los frapuchinos que navegaron hasta tordesill…devido a que los 3 frapuchinos se derritieron', groups: undefined]

console.log(texto.match(/^(los)\s(frapuchino)?\s(derritieron)$/));
// null

console.log(texto.match(/^(los).*(frapuchinos)+.*(derritieron)$/));
//(4) ['los frapuchinos que navegaron hasta tordesillas n…do devido a que los 3 frapuchinos se derritieron', 'los', 'frapuchino', 'derritieron', index: 0, input: 'los frapuchinos que navegaron hasta tordesill…devido a que los 3 frapuchinos se derritieron', groups: undefined]



