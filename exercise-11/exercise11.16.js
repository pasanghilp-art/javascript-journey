function findIndex(array , word){
    for(i=0; i<array.length; i++){
        if(array[i] === word){
            return i;
        }
    }
    return -1;
}
console.log(findIndex(['hey','search','hi']));