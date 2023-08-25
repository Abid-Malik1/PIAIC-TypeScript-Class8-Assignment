function filterOddNumbers(numbers) {
    var oddNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}
var numberArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with your array of numbers
var oddNumberArray = filterOddNumbers(numberArray1);
console.log("Odd numbers:", oddNumberArray);
