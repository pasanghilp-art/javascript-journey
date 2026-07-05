function findIndex(array, word){
    for(i=0; i<array.length; i++){
        if(array[i] === word){
            return i;
        }
    }
    return -1;
}

function unique(array){
    const result = [];
    for(i=0; i<array.length; i++){
        const word= array[i];
        if(findIndex(result,word)=== -1){
            result.push(array[i]);
        }
    }
    return result;
}
console.log(unique(['green','green','red','green']));