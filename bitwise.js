console.log((5).toString(2));
console.log((~5)); 

console.log('bitwise');
var x = 2;
console.log(x);
console.log(~(3));

var y = (1 << 1);
console.log(y);
console.log(y << 1);
console.log(2 << 3);

console.log(3 | -1);
console.log(3 & (1 << 0));
console.log(3 & (1 << 1));
console.log(3 & (1 << 2));
console.log(3 & (1 << 3));

console.log("-2 bits 4");
console.log(-2 & (1 << 0));
console.log(-2 & (1 << 1));
console.log(-2 & (1 << 2));
console.log(-2 & (1 << 3));

console.log("-3 bits x");
var s = -5;
//console.log((-3 >> 7) & (1));
console.log((s >> 3) & (1));
console.log((s >> 2) & (1));
console.log((s >> 1) & (1));
console.log((s >> 0) & (1));

console.log(~(-4)); 

//TWO's COMPLEMENT @ 3 bits
// 011 == 3
// 010 == 2
// 001 == 1
// 000 == 0
// 111 == -1
// 110 == -2
// 101 == -3
// 100 == -4

//TWO's COMPLEMENT @ 4 bits
// 0111 == 7
// 0000 == 0
// 1111 == -1
// 1110 == -2
// 1101 == -3
// 1100 == -4
// 1011 == -5
// 1010 == -6
// 1001 == -7
// 1000 == -8

//A function that returns the 2's comp. notation of a number in JS:
Number.prototype.twos = function(n) {
  var ret = ""; 
  while(n)
  {
    ret += ( (this >> --n) & (1) ); 
  }
  return ret;
};

function twos(x, y) {
  var ret = ""; 
  while(y)
  {
    ret += ( (x >> --y) & (1) ); 
  }
  return ret;
}

console.log(twos(7,4));
console.log((-16).twos(6));