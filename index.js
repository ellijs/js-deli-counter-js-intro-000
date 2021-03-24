
function takeANumber(array, person) {
  let i = array.length + 1;
  array.push(person);
  return `Welcome, ${person}. You are number ${i} in line.`);
  }
