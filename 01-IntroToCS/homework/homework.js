'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var sum = 0;
    for (let i = 0; i < num.length; i++) {
       sum = sum + num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  var bin = [];
  while(num > 0) {
    bin.push(num % 2);
    num = Math.floor(num/2);
  }
  bin = bin.reverse().join('');
  return bin;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}