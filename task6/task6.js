function findLargestElement(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    var largest = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
var numberArray2 = [25, 10, 70, 45, 90, 30]; // Replace with your array of numbers
var largestElement = findLargestElement(numberArray2);
console.log("The largest element in the array is: ".concat(largestElement));
