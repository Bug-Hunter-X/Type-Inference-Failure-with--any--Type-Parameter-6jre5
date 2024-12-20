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

// This line will cause an error because the type of result is now any. 
// TypeScript cannot correctly infer the type of the return value from calling a function with a type parameter of 'any'. 
result = add(5, '3');
console.log(result); // Outputs 53 which is unexpected.