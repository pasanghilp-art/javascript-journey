function countPositive(nums){
    let result= 0;
    for(i=0; i<nums.length; i++){
        if(nums[i]>0){
            result+=1;
        }
    }
    return result;
}
console.log((-1,0,1,2,3));