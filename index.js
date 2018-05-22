let katzDeliLine = [];

let count = 0;
let numberLine = [];

function takeANumber(katzDeliLine) {
  count++;
  numberLine.push(count);
  return `Welcome, you are number ${count} ${numberLine}`;
}

// return the person's ticket number
function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine}.`;
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  let lineList = [];
  for(let i=0; i<katzDeliLine.length; i++) {
    let lineListItem = ` ${i+1}. ${katzDeliLine[i]}`
    lineList.push(lineListItem);
  }
  return `The line is currently:${lineList}`
}