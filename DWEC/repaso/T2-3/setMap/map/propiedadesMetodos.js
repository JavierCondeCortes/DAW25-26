let mapa = new Map;

mapa.set('pepe','buen amigo');
mapa.set('alfonso','mal');
mapa.set('eustaquio','majo');

console.log('entries')
console.log(mapa.entries());

console.log('get')
console.log(mapa.get('pepe'))

console.log('has')
console.log(mapa.has('alfonso'))

console.log('delete')
console.log(mapa.delete('alfonso'))
console.log(mapa.entries());

console.log('values')
console.log(mapa.values())

console.log('keys')
console.log(mapa.keys())