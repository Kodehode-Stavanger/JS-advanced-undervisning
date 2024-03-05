// Destructuring arrays

const numbers = [1, 2, 3, 4, 5];

/* const firstNumber = numbers[0]
const secondNumber = numbers[1] */

const [firstNumber, secondNumber, ...rest] = numbers;

/* console.log(firstNumber);
console.log(secondNumber);
console.log(rest); */

function colors() {
  return ["blue", "red"];
}

const [firstColor, secondColor] = colors();

const positions = [
  ["x", 87],
  ["y", 19],
  ["z", 134],
];

/* positions.forEach((element) => {
  console.log(`Axis: ${element[0]}, Value: ${element[1]}`);
});

positions.forEach(([axis, value]) => {
    console.log(`Axis: ${axis}, Value: ${value}`)
}) */

// Destructuring objects

const user = {
  name: "Jonas",
  displayName: "Killer981",
  hobbies: ["Coding", "Gaming", "Cats"],
  address: { streetName: "Solskinnsgaten", number: 14 },
  id: 4783625,
};

function generateUserPage({ name, displayName, id }) {
  console.log(name, displayName, id);
}

function generateUserPage(userData) {
  console.log(userData.name, userData.displayName, userData.id);
}

generateUserPage(user);

const {
  name: firstName,
  displayName: screenName,
  id = "No ID found on this user",
  hobbies: { length: numberOfHobbies },
  address: { streetName },
} = user;

//console.log(firstName, screenName, gateNavn, numberOfHobbies);

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];

/* for (let person of people) {
  console.log(person.name, person.male, person.age, person.hobbies);
} */

// data.results[0].list

/* for (let { name: firstName, male, age, hobbies } of people) {
  console.log(firstName, male, age, hobbies);
} */

/* people.forEach(({ name, male, age, hobbies }) => {
  console.log(name, male, age, hobbies);
}); */
