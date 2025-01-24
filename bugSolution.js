function foo(a, b) {
  if (a === 0) {
    return b; 
  }
  if (a > 100) { // Added check to prevent stack overflow
    throw new Error("Stack overflow prevention activated.");
  }
  return foo(a - 1, a + b);
}
console.log(foo(5, 10)); //This will now work correctly.