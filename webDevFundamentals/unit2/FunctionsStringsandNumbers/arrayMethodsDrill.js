function firstFourItems(array) {
  return array.slice(0, 4);
}

function lastThreeItems(array) {
  return array.slice(-3);
}
function minusLastItem(array) {
  return array.slice(0, array.length - 1);
}

function copyFirstHalf(array) {
  return array.slice(0, array.length / 2);
}

function squares(array) {
  return array.map(x => x*x);
}

function greatestToLeast(array) {
  return array.sort(function(a, b) {
    return b - a;
  });
}

function shortWords(array) {
  return array.filter(x => x.length < 5)
}

function divisibleBy5(array) {
  return array.find(x => x % 5 === 0);
}

