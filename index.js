function takeANumber(line, person) {
  let newArray = [];
  let i = 0;
  for (i = 0; i > line.length; i++) {
    newArray.push(`Welcome, ${person[i]}. You are number (${line[i]}+ 1) in line.`);
  }
  return newArray;
}
