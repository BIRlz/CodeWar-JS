/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var newArray = nums1.concat(nums2).sort(function(a,b){
        return a-b;
    });
    if(newArray.length % 2 === 1){
        return newArray[(newArray.length - 1 )/2];
    }else{
        return (newArray[newArray.length/2-1]+newArray[(newArray.length)/2])/2;
    }
};
