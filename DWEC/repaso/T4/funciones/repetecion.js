let a = ['a','b','c']
let b = [1,2,3,3]

console.log('forEach')
a.forEach((element,indice) => console.log(`elemento ${element} con indice ${indice}`));

console.log('map')
console.log(a.map((e,i) => e+i))

console.log('reduce')
console.log(b.reduce((ac,n,i)=> n+i+ac ))

	        // accumulator	currentValue	index	Return value
// First call	   15       	16         	1       	31
// Second call	   31       	17         	2       	48
// Third call	   48       	18         	3       	66
// Fourth call	   66       	19         	4       	85


console.log('filter');
console.log(b.filter(x=>x>1));

console.log('every');
console.log(b.every(x=>x<5));//todos cumplan

console.log('some');
console.log(b.some(x=>x=1));//alguno cumpla

console.log('find');
console.log(b.find(x=> x===3));

console.log('findIndex');
console.log(b.findIndex(x=>x===2));


let texto = "no luce la luna sin traérmela en sueños";

console.log('split');
console.log(texto.split(" ")
            .filter(x => x[0] === 'l')
            .map(x => x.toUpperCase()));

console.log(texto.split(" ")
            .map(x => x.length)
            .filter(x => x<3)
            .reduce((ac,n)=> ac+n));