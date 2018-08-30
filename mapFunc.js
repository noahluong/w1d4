var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr, callback) {
var resultingArr = []
for (var i = 0; i < arr.length; i++) {
resultingArr.push(callback(arr[i]));
} console.log(resultingArr);
return resultingArr;
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});




// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]