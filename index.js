
function takeANumber(array, person) {
  let i = array.length + 1;
  array.push(person);
  return `Welcome, ${person}. You are number ${i} in line.`;
  }

function nowServing(katzDeliLine) {
  let serving = katzDeliLine.shift();
  if (serving === null) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${serving}.`;
  }
}
