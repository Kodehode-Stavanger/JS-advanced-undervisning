// High order methods.

function myFunc(callback) {
  const test = "test";
  callback(test);
}

function logger(param) {
  console.log(param);
}

// Invoking a high order function with named callback
myFunc(logger);

// Invoking a high order function with an ANONYMOUS callback
myFunc(function (str) {
  console.log(str);
});
// Invoking a high order function with an ANONYMOUS ARROW CALLBACK FUNCTION
myFunc((str) => {
  console.log(str);
});

const numArray = [3, 5, 1, 8, 6, 7, 1, 5, 5, 5, 9, 8, 7, 5, 2, 3, 1, 7];

// forEach runs a function for each element in an array
/* numArray.forEach((e, i, a) => {
  console.log(array);
  console.log(index);
  console.log(element);
}); */

// map runs a function for each element in an array, and returns the element
// to be stored in a new array. PS return ALL elements, or you'll get undefines

const newNums = numArray.map((e) => e * 2);
//console.log(newNums);

// filter filters an array
const filteredNums = numArray.filter((e) => e > 5);

// CHAINED:
const chained = numArray.filter((e) => e > 5).map((e) => e * 2);
console.log(filteredNums);

// some - checks if any elements in the array satisfy a condition you give
const check = numArray.some((e) => e > 9);

// every - checks if every element in the array satisfies a condition you give
const everyCheck = numArray.every((e) => e > 1);
console.log(everyCheck);

// reduce
const sum = numArray.reduce((acc, current) => acc + current);
console.log(sum);

// sort
numArray.sort((a, b) => b - a);
console.log(numArray);

// Events.

const btn = document.getElementById("btn");
btn.style.height = "100px";
btn.style.width = "100px";
btn.style.backgroundColor = "black";

// Event listener

// Using a reusable named callback
/* btn.addEventListener("click", namedFunction);

function namedCallback() {
  console.log("OK");
} */

let blueModeToggle = false;
btn.addEventListener("dblclick", (event) => {
  blueModeToggle = !blueModeToggle;
  if (blueModeToggle) btn.style.backgroundColor = "blue";
  if (!blueModeToggle) btn.style.backgroundColor = "black";
  const data = document.createElement("p");
  //document.body.lastChild.remove()
  data.textContent = `X: ${event.clientX} Y:${event.clientY}`;
  document.body.append(data);
});

window.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "7" && e.ctrlKey) window.alert("OMG you pressed ctrl+7!!! ");
});
