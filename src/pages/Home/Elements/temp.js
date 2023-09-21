const shuffleArray = (array) => {
  return array.slice().sort(() => Math.random() - 0.5);
}

// Example usage
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffledArray = shuffleArray(myArray);
// console.log(shuffledArray);



//  Array of arrays 

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
  [3, 4, 5, 6, 7, 8, 9, 10]
];
//  Get the value like this [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArr = arr.flat();
// console.log(newArr);
// Get unique values from array
const uniqueArr = [...new Set(newArr)];
// console.log(uniqueArr);


const options = [true , false];
const random = Math.floor(Math.random() * options.length);
console.log(options[random]);