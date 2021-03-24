function takeANumber(array, person) {
  order = array.length + 1 ;
  array.push(`Welcome, ${person}. You are number ${order} in line.`);
  return array;
  }
