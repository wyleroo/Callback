
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);
//     }
//   }
// }

// function actionWhenFound(index) {
//   console.log("Found Waldo at index " + index + "!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//With refactoring



//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);
//     }
//   }
// }

//MDN Syntax description forEach()
// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);

function findWaldo(array,found) {
 array.forEach(function (elm,index,array) {
   if (elm === "Waldo") {
     found(index);
   }
 })
}

function actionWhenFound(index) {
 console.log("Found him at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


