// High order methods

const myNumbers = [1, 2, 3, 4, 5];

const incrementedNumbers = myNumbers.map((element, index) => {
  return element;
});
//console.log(incrementedNumbers);

const filteredNumbers = myNumbers.filter((element, index) => {
  return element % 2 && element >= 3;
});
//console.log(filteredNumbers);

const names = [
  "Samuel",
  "Sarah",
  "Bendik",
  "Veronica",
  "Rama",
  "Kokila",
  "Sai",
  "Elliot",
  "Jonas",
  "Afaf",
  "Christian",
];

// Filter out names that are fewer than 5 letters long,
// and names that start with "S". Use 1 filter.

const filteredNames = names.filter((e) => {
  return e.length >= 5 && !e.includes("S");
});
console.log(filteredNames);

// Spread syntax ...

const myArr = [1, 2, 3];
const myArr2 = [4, 5, 6];
const spreadArray = [10, 20, 9, ...myArr, 5, ...myArr2]; // [myArr[0], myArr[1], myArr[2]]
console.log(spreadArray);

const adder = (a, b, c) => a + b + c;
//console.log(adder(...myArr));

// pass by reference vs. pass by value
// Make a copy of an array!
// Split a string into an array!
// Combine/concatinate arrays!
// Send arrays as individual parameters to functions!
// Construct arrays!
// Add single value to an array!
// Oh, and it works with objects 😊

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];
// Add an index key to the books.

const updatedBooks = books.map((book, index) => {
  return { ...book, index: index };
});
console.log(updatedBooks);
