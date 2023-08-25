function sumOfEvenNumbers(n: number): number {
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      sum += 2 * i; // Even numbers are multiples of 2
    }
  
    return sum;
  }
  
  const n = 5; // Change this value to the desired number of even numbers
  const result = sumOfEvenNumbers(n);
  
  console.log(`The sum of the first ${n} even numbers is: ${result}`);
  