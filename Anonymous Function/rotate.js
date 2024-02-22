var rotateArrayByK = function(arr, k) {
    var rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArray);
};

rotateArrayByK([1, 2, 3, 4, 5], 2);
