var getPalindromes = function(arr) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    var palindromeWords = arr.filter(isPalindrome);
    console.log(palindromeWords);
};

getPalindromes(["level", "hello", "radar", "world"]);
