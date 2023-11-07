// Code your solutions in this file

function countDown(number) {
  for (let index = number; index >= 0; index--) {
    console.log(index);
  }
}
  
function writeCards(names, event) {
  const messages = new Array();
  for (let index = 0; index < names.length; index++) {
    messages[index] = `Thank you, ${names[index]}, for the wonderful ${event} gift!`;
  }
  return messages;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));