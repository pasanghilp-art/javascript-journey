function minMax(nums){
    let minMaxObject={
        min: nums[0],
        max: nums[0]
    }
    for(i=0; i<nums.length; i++){
        let value = nums[i];
        if(value< minMaxObject.min){
            minMaxObject.min = value;
        } else if (value> minMaxObject.max){
            minMaxObject.max = value;
        }
    }
    return minMaxObject;
}
console.log(minMax([1,-2,3,5]));