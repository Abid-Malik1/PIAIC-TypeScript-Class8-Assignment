function calculateCircleArea(radius: number): number {
    const area = Math.PI * radius * radius;
    return area;
  }
  
  const radius = 5; // Replace with the desired radius
  const area = calculateCircleArea(radius);
  
  console.log(`The area of a circle with radius ${radius} is: ${area}`);
  