function takeANumber(array, person) {
  let newArray = [];
  for ( let i = 1; i < array.length + 1; i++) {
    newArray.push(`Welcome, ${person}. You are number ${i} in line.`);
    }
    return newArray;
  }
