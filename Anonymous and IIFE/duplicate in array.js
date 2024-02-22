var removeDuplicates = function(arr) {
    var uniqueArray = Array.from(new Set(arr));
    console.log(uniqueArray);
};

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
