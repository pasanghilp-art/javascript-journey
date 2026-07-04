function minMax(nums){
    object={
        min: null,
        max: null
    }
    for(let i=0; i<nums.length; i++){
        let value = nums[i];
        if(object.min === null || value < object.min){
            object.min= value;
        }
        
        if (object.max === null || value> object.max){
            object.max= value;
        } 
    }
    return result;
}
console.log(minmax([]));
console.log(minMax(-1,0,1,2));