/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var obj = {};
 
   for(var i=0; i< nums.length;i++) {
     const item = nums[i];
     console.log(obj)
     if(obj[item] >= 0) {
       return [obj[item], i]
     } else {
       obj[target - item] = i;
     }
   }
 };
 console.log(twoSum([1,2,3,4],7));