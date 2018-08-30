// Implement a function countdownGenerator() that takes in a number x
// and returns a function that counts down when it is called
// (see starter code below).


var countdownGenerator = function (x) {
  var x = 4;
  return function() {
    x--;
    if (x ===0) {
      return "Blast off!"
    } else if (x < 0) {
      return "Rockets already gone, bub!"
    }
    return x;
  }

};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
