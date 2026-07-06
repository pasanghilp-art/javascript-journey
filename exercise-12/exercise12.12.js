function countPositive(nums){
    let result= 0;
    nums.foreach((num)=>{
        if(num>0){
            result++;
        }
    });
    return result;
}
console.log([1,2,-3,4]);