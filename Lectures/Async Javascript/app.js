// Asynchronous Javascript

//callback hell
/* console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 2000);
console.log(4);
console.log(5); */

// Promises

/* const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
      resolve(randomNum);
    } else {
      reject(new Error("Random number is too small"));
    }
  }, 2000);
});
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error))
  .finally(() => {});
 */
// API - Application Programming Interface
// RESTful API
// JSON - JavaScript Object Notation

/* fetch("https://jsonplaceholder.typicode.com/todos")
  .then((result) => result.json())
  .then((data) => {
    renderSite(data);
  })
  .catch((error) => {
    console.log(error.message);
  }); */

// Async/Await

async function getData() {
  // try/catch block
  try {
    const result = await fetch("https://random.dog/woof.json");
    const data = await result.json();
    renderSite(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
function renderSite(data) {
  console.log(data.url);
  const picture = document.createElement("img");
  picture.src = data.url;
  document.body.append(picture);
}
