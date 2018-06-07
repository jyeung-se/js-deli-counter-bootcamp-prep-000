var katzDeli = [];

var counter = 0;

function takeANumber(katzDeliLine) {
  counter++;
  katzDeliLine.push(counter);
  return `Welcome you are ${counter}.`;
//  katzDeliLine.push(name);
//  return `Welcome, ${name}. You are number ` + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
      return `Currently serving ${katzDeliLine.shift()}.`;
    }
}

var lineOrder = [];
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
      for (var i = 0; i < katzDeliLine.length; i++) {
        lineOrder.push(` ${i + 1}. ${katzDeliLine[i]}`);
      }
      return `The line is currently:${lineOrder}`
    }
  }


