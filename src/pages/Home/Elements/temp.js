function shuffleArray(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

// Example usage
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffledArray = shuffleArray(myArray);
console.log(shuffledArray);
