var words = ["ground", "control", "to", "major", "tom"];
var newArray = [];

function map(array, callback) {
  array.forEach(function (element) {
    newArray.push(callback(element));
  });
  return newArray;
};

var output = map(words, function(placeholder) {
  return placeholder.length;
});


console.log('output', output);
//[6, 7, 2, 5, 3] expected output;