// Step 1: Define a Transformation Function
function doubleNumber(num: number): number {
    return num * 2;
  }
  
  function squareNumber(num: number): number {
    return num * num;
  }
  
  // Step 2: Create the `transformArray` Function
  function transformArray<T, U>(arr: T[], transformFn: (item: T) => U): U[] {
    return arr.map(transformFn);
  }
  
  // Step 3: Use the `transformArray` Function
  const numbers: number[] = [1, 2, 3, 4, 5];
  
  // Double each number in the array
  const doubledNumbers: number[] = transformArray(numbers, doubleNumber);
  console.log("Doubled Numbers:", doubledNumbers);
  
  // Square each number in the array
  const squaredNumbers: number[] = transformArray(numbers, squareNumber);
  console.log("Squared Numbers:", squaredNumbers);
  