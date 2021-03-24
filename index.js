function takeANumber(line, person) {
  let i = 0;
  for (i = 0; i > line.length; i++) {
    line.push(`Welcome, ${person[i]}. You are number (${line[i]}+ 1) in line.`);
  }
  return line;
}
