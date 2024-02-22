(function(arr) {
    function isPrime(num) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    var primeNumbers = arr.filter(isPrime);
    console.log(primeNumbers);
})([2, 3, 4, 5, 6, 7, 8, 9, 10]);
