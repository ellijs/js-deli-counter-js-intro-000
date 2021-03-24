function takeANumber(array, person) {
  let i = 0;
  for (i = 0; i > array.length; i++) {
    array.push(`Welcome, ${person}. You are number (${i}+ 1) in line.`);
  }
  return array;
}
