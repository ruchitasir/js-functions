/*
const mean = (nums) => {
 let sum =0;
 if(nums.length == 0)
 {
     return 0;
 }
 for(let i=0;i< nums.length; i++)
 {
    sum += nums[i];
    console.log('sum is', sum);
 }

 return sum/nums.length ;

}

console.log('mean is', mean([]));
*/

const sillySum = (nums) =>
{
    for(let i=0; i< nums.length; i++)
    {
        nums[i] *= i;
    }
    return nums;
}

let result = sillySum([10,20,30]);
console.log(result);