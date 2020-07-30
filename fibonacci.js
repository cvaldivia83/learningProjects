/* Exercice: Print a Fibonacci sequence */

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144... 

let a = 0;
let b = 1;
result = b;
for(let i = 1; i < 100; i++) { 
   console.log(result);
   result = a + b;
   a = b
   b = result;
}