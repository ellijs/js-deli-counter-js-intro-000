function takeANumber(people, name) {
  let i = 0;
  for (i = 0; i > people.length; i++) {
    people.push(`Welcome, ${name[i]}. You are number ${i + 1} in line.`);
  }
}
