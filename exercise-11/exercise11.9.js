function addArray(array1,array2){
    result = [];
    for(let i=0; i<array1.length; i++){
        result.push(array1[i]+array2[i]);
    }
    return result;
}
console.log(addNum([1,2,3,4],[1,2,3,4]));