function filterOddNumbers(numbers: number[]): number[] {
    const oddNumbers: number[] = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
      }
    }
  
    return oddNumbers;
  }
  
  const numberArray1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with your array of numbers
  const oddNumberArray = filterOddNumbers(numberArray1);
  
  console.log("Odd numbers:", oddNumberArray);
  