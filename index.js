// Code your solutions in this file
const arr = [];

function writeCards(cards, surprise) {
  for (let i = 0; i < cards.length; i++) {
    arr.push(`Thank you, ${cards[i]}, for the wonderful ${surprise} gift!`);
  }

  return arr;
}

function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return num;
}
