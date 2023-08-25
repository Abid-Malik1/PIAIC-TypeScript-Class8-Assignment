function sumOfEvenNumbers(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += 2 * i; // Even numbers are multiples of 2
    }
    return sum;
}
var n = 5; // Change this value to the desired number of even numbers
var result = sumOfEvenNumbers(n);
console.log("The sum of the first ".concat(n, " even numbers is: ").concat(result));
