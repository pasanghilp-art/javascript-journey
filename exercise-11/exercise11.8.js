function addNum(array,num){
    result = [];
    for(let i=0; i<array.length; i++){
        result.push(array[i]+num);
    }
    return result;
}
console.log(addNum([1,2,3,4],2));