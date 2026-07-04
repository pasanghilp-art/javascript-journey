function swap(array){
    let LastIndex = array.length-1;
    const lastNum = array[lastIndex];
const firstNum = array[0];

array[0] = lastNum;
array[lastIndex] = firstNum;

return array;
}
console.log(swap([1,2,3]));
console.log(swap(['hi','hello','bye']));
