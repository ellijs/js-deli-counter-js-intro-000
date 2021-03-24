function takeANumber(people, name) {
  let newArray = [];
  let i = 0;
  for (i = 0; i > people.length; i++) {
    newArray.push(`Welcome, ${name[i]}. You are number ${i + 1} in line.`);
  }
  return newArray;
}
