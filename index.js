
function takeANumber(array, person) {
  for ( let i = 1; i < array.length + 1; i++) {
    array.push(`Welcome, ${person}. You are number ${i} in line.`);
    }
    return array;
  }
