arrayMulti = [['a','b'],['c','d'],[1,2]];

// console.log(arrayMulti); // [Array(2), Array(2), Array(2)]
// console.log(arrayMulti[0]); // ['a', 'b']
// console.log(arrayMulti[0][1]); // b


for(let i=0;i<arrayMulti.length;i++){
    for(let j=0;j<arrayMulti[i].length;j++){
        console.log(arrayMulti[i][j]);
    }
}