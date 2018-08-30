// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(arr) {
  // for (var i = 0; i < arr.length; i++) {
    if (arr === "Waldo") {
      found();   // execute callback
    }
  });
}

function actionWhenFound() {
  console.log("Found him!");
}

console.log(findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound));