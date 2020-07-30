/* FizzBuzz exercise: 

Counting progressively from 1 to 100: 

- if number can be divided by three, print 'Fizz';
- if number can be divided by five, print 'Buzz';
- else, print number. */ 

for(let i = 1; i < 100; i++){
    if(i % 3 == 0) { 
        console.log('Fizz!');
    } else if(i % 5 == 0) { 
        console.log('Buzz!');
    } else {
        console.log(i)
    }
};

