function findLargestElement(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error("Array is empty");
    }
  
    let largest = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
  
    return largest;
  }
  
  const numberArray2: number[] = [25, 10, 70, 45, 90, 30]; // Replace with your array of numbers
  const largestElement = findLargestElement(numberArray2);
  
  console.log(`The largest element in the array is: ${largestElement}`);
  