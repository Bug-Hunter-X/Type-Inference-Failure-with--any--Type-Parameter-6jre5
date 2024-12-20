# TypeScript Type Inference Bug

This repository demonstrates a bug in TypeScript's type inference system when dealing with functions that have type parameters of 'any'.  The bug results in unexpected behavior and potential runtime errors because type safety is lost.

## Bug Description

The `add` and `subtract` functions are correctly typed to accept numbers and return numbers. However, when we call `add` with a mix of number and string, TypeScript infers the type of `result` as 'any'. This leads to the loss of type safety and unpredictable behavior, such as concatenating the string '3' to the number 5 instead of adding them numerically. 

## Solution

The solution involves enforcing type safety by explicitly typing the arguments to ensure they conform to the expected types (number in this case).  Avoiding the use of 'any' type parameter is crucial for robust type safety in TypeScript.