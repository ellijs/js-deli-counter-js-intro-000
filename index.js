
function takeANumber(array, person) {
  let i = array.length + 1;
  array.push(person);
  return `Welcome, ${person}. You are number ${i} in line.`;
  }

function nowServing(katzDeliLine) {
  if (katzDeliLine.shift() === null) {
    return "There is nobody waiting to be served!";
  } else {
    return katzDeliLine.shift();
  }
}
