//Writing a function that takes in an array of integers and returns the sum of all even numbers in the array.

function sumEvenNumbers(numbers) {
    let total = 0;  
    for (let i = 0; i < numbers.length; i++) {
      let currentNumber = numbers[i]; 
  
      if (currentNumber % 2 === 0) {
        total = total + currentNumber;  
      }
    }
    return total; 
  }
  
  const myNumbers = [1, 2, 3, 4, 5, 6,7,11];
  const result = sumEvenNumbers(myNumbers); 
  
  console.log(result);  