/*


Modules from ES6


Reusable
organize larger project
avoid massive files


 */

//Export

//Import

import { sum, sub } from "./calc.js";
console.log(sum(2, 3));
console.log(sub(2, 3));
//Name your default import as you import:
import { default as myName } from "./whoami.js";
//Or a lot easier:
import myCoolName from "./whoami.js";

console.log(myCoolName());

// ALIAS:

import { sum as ADDY, sub as SUBBY } from "./calc.js";
console.log(ADDY(2, 3));
console.log(SUBBY(2, 3));

//import all
import * as calc from "./calc.js";
console.log(calc.sum(2, 8));

//combine import
import * as combine from "./combine.js";
console.log(combine.nameSay());
console.log(combine.calc.sum(2, 19));

//dynamic import
//static:
import { sayHi, sayHola } from "./greeting.js";
console.log(sayHi());
console.log(sayHola());
//dynamic imports can be conditional
import("./greeting.js"); //this is a promise!
const { sayHi, sayHola } = await import("./greeting.js");
//can use await outside of async functions in modules!
//for example:
if (1 === 1) {
  const { sayHi, sayHola } = await import("./greeting.js");
}

//in paralell with Promise.all():
const promises = Promise.all([
  await import("./greeting.js"),
  await import("./calc.js"),
]);
console.log(promises);
//console.log(sayHola());
promises.then((result) => {
  console.log(result[0].sayHi());
});
