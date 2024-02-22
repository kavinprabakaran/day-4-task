var getMedianOfArrays = function(arr1, arr2) {
    var combinedArray = arr1.concat(arr2);
    combinedArray.sort(function(a, b) {
        return a - b;
    });

    var length = combinedArray.length;
    var median = (combinedArray[Math.floor((length - 1) / 2)] + combinedArray[Math.ceil((length - 1) / 2)]) / 2;

    console.log(median);
};

getMedianOfArrays([1, 3, 5], [2, 4, 6]);
