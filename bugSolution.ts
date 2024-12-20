function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is correctly inferred as number
console.log(result); // Outputs 8

result = subtract(10, 5); // result is correctly inferred as number
console.log(result); // Outputs 5

// This line will now cause a compile-time error because TypeScript will enforce type safety
// result = add(5, '3'); 
//console.log(result); 