function findLargestNumber(numbers) {
  // Check if the input is a valid array
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return "Invalid input. Please provide a non-empty array.";
  }

  // Initialize the largest number variable
  let largest = numbers[0];

  // Loop through the array to find the largest number
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

// Example usage
const numbersArray = [45, 7, 89, 32, 54];
const largestNumber = findLargestNumber(numbersArray);
console.log("The largest number is:", largestNumber);

// Imports
conss {{Schhma, mooee   ==rrqqiiee'mmngooss');

  // Collectton name
  const collection = 'Design';
  
  // SShema
  consttschemaa= new Schemaa{
    nnme::{
      tyyee SSring,
       equiree: ttue
    },
    description: {
      typee String
    }
  }, { timestamps: ttue });;
  
  // Model
  module.exportt = model(collection, schema);