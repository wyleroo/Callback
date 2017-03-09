//First exercise
// var array = [10, 2, 5, 1, 9];
// array.sort(function(a,b) {
//   return a - b;
// });

// console.log(array);



var students = [
  { id: 3, name: "zoidberg", age: 23 },
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// Write a sorting function (sometimes called a custom comparator),
// that sorts the above array first by the name ascending alphabetically,
// and in cases where the names are equal sort by descending age.

students.sort(function(a, b) {
  var nameA = a.name
  var nameB = b.name
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if (nameA == nameB) {
    students.sort(function(a,b) {
      return nameA.age - nameB.age;
    })
    return 1
  }
});
console.log(students);
