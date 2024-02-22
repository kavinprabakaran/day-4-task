(function(arr) {
    arr = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(arr);
})(["apple", "banana", "cherry"]);
