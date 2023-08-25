function printEvenNumbers(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        }
    }
}
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with your array of numbers
printEvenNumbers(numberArray);
