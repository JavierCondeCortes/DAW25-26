let time = new Date();
console.log(time);

let myTime = new Date(2005,5,5);
console.log(myTime);

console.log('now')
console.log(Date.now()) //DATE NO TIME

console.log('parse')
console.log(Date.parse("2005-06-05")) //DATE NO TIME

console.log('getFullYear')
console.log(time.getFullYear())

console.log('getMonth')
console.log(time.getMonth())

console.log('getDate')
console.log(time.getDate())

console.log('getDay')
console.log(time.getDay())

console.log("getTime")
console.log(time.getTime())
