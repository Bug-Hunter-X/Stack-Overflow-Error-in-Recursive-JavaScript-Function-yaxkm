# Stack Overflow in Recursive JavaScript Function
This repository demonstrates a common error in recursive JavaScript functions: stack overflow.  The `foo` function calculates a result recursively, but without a proper check for excessive recursion, it leads to exceeding the call stack limit. 

## Bug
The `bug.js` file contains a recursive function that will throw a stack overflow error if the input 'a' is too large.  This is because the recursive calls continue without a proper exit condition for large values of 'a', leading to an excessive number of function calls on the call stack.

## Solution
The `bugSolution.js` file provides a corrected version of the function.  It adds a check to prevent the function from making too many recursive calls. This is a simple example; more sophisticated handling might be needed for real-world applications, but this demonstrates a simple solution to avoid the stack overflow.

## How to Run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Try running `foo(5, 10)` in `bug.js` to see the stack overflow.
4. Then, try the same in `bugSolution.js` to see the fix in action.