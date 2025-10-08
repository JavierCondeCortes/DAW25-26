array = [4,0,3,4,7,3,5,8,1,11,8,8,0,2,3,1,2,5,7,3,2,5,1];

array.sort(function(a,b){
    return a-b;
})

for(let i=0;i<array.length;i++){
    if(array[i]==array[i+1]){
        array.splice(i+1,1);
        i--;
    }
}
console.log(array);

