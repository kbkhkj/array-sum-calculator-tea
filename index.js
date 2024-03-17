// index.js

function calculateArraySum(array) {
    let sum = 0;
    for (let num of array) {
      sum += num;
    }
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const sum = calculateArraySum(numbers);
  console.log(`Sum of numbers in the array:`, sum);
  