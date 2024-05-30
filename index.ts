//DAY 1:

import { log } from "console";

// Q1
let Name = "Kashif Ali";
// console.log(`Hello ${Name}, would you like to learn some TypeScript today?`);

// Q2
let personName = 'Ali';
// console.log(personName.toLowerCase());
// console.log(personName.toUpperCase());
// console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());

// DAY 2:

// Q1 & 2
let person = "Albert Einstein";
let quote = "A person who never made a mistake never tried anything new."
// console.log(`${person} once said, ${quote}`);

// Q3
let aName = "\t\n Kashif Ali \t\n";
// console.log(aName);
// console.log(aName.trim());

// DAY 3:

// Q1 & 2
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);

// Q3
let myFavouriteNum = 6;
// console.log(`My favourite number is ${myFavouriteNum}`);

// DAY 4:

// Q2 

// let names = ['Arham', 'Zain', 'Mudassir'];
// for(let i = 0; i < names.length; i++){
//   console.log(`Hi ${names[i]}, have a nice day`);
// };

// Q3
let names = ['Arham', 'Zain', 'Mudassir'];
for(let name of names){
  // console.log(`Hi ${name}, have a nice day`);
};

// DAY5:

// Q1
let myFavTransportation:string[] = ['Tesla car', 'Honda motorcycle'];
myFavTransportation.forEach(transport => {
  // console.log(`I like to had a ${transport}.`); 
});

// Q2
let listOfPeopleToInvite:string[] = ['Arham', 'Zain', 'Mudassir'];
listOfPeopleToInvite.forEach(guest => {
  // console.log(`Dear ${guest} you are invited to had a dinner with us.`);
});

// Q3 
let unableToAttend  = 'Zain';
// console.log(`${unableToAttend} can not make it.`);

let newGuest = 'sheharyar';
listOfPeopleToInvite[listOfPeopleToInvite.indexOf(unableToAttend)] = newGuest;

listOfPeopleToInvite.forEach(guest => {
  // console.log(`Dear ${guest}, you are invited to had a dinner with us.`);
});

// DAY6:

// Q1
let guests:string[] = ['Arham', 'sheharyar', 'Mudassir'];
// console.log('Great news! I have found a bigger dinner table');

guests.push('Shoukat');
guests.splice(guests.length / 2, 0 , 'Muzammil');
guests.unshift('Salman');

guests.forEach(guest => {
  // console.log(`Dear ${guest}, you are invited to had a dinner with us.`);
});

// Q2
// console.log('Sorry! for bad news bigger table won,t arrive in time');

while (guests.length > 2) {
  let removedguest = guests.pop()
  // console.log(`Sorry ${removedguest} I can't invite you to dinner.`);
};

guests.forEach(guest => {
  // console.log(`Dear ${guest}, you are invited to had a dinner with us.`);
});

guests.splice(0, guests.length)
// console.log(guests);

// Q3
let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];

// console.log("Original order:", places);

// console.log("Alphabetical order:", [...places].sort());

// console.log("Original order:", places);

// console.log("Reverse alphabetical order:", [...places].sort().reverse());

// console.log("Original order:", places);

// places.reverse();
// console.log("Reversed order:", places);

// places.reverse();
// console.log("Original order:", places);

// places.sort();
// console.log("Alphabetical order:", places);

// places.reverse();
// console.log("Reverse alphabetical order:", places);

// DAY 7:

// Q1
let Guests:string[] = ['Arham', 'sheharyar', 'Mudassir', 'Zain', 'Sulaiman'];
// console.log(`I am inviting ${Guests.length} people to dinner with me`);

// Q2
let countriesILikeToVisit = ['Dubai', 'saudia Arabia', 'Canada'];
// console.log('Countries i like to visit', countriesILikeToVisit);

// Q3
let car: {name: string, color: string, model:number} = {
  name: 'Toyota',
  color: 'white',
  model: 2023
};
// console.log(`Car name is ${car.name} and color it's ${car.color} and is model number is ${car.model}`);

// DAY 8:

// Q1
let friend = ['shoukat', 'Abdullah', 'Maaz'];
// console.log(friend[3]);

// console.log(friend[2]);

// Q2
let book = 'Maths';
// console.log("Is book == 'Maths' ? I predict True.");
// console.log(book == 'Maths');

// console.log("Is book == 'Chemistry' ? I predict False.");
// console.log(book == 'Chemistry');

// DAY9:

// Q1

let aleinColor = 'green';
// if (aleinColor === 'green') {
  // console.log('You killed the Alien.');
// };

// Q2
aleinColor = 'blue';
if (aleinColor === 'green'){
  // console.log('you killed the normal Alein, and earned 5 points');
} else {
  // console.log('You earned 0 points');
};

// Q3
aleinColor = 'red';
// if (aleinColor === 'green') {
//   console.log('you killed the normal level Alein, and earned 5 points');
// } else if (aleinColor === 'yellow') {
//  console.log('you killed the medium level Alein, and earned 10 points');
// } else if (aleinColor === 'red') {
//   console.log('you killed the Boss level Alein, and earned 20 points');
// };

// DAY10:

// Q1
let age: number = 15;
// if (age < 4) {
//   console.log('This is a kid');
// } else if (age < 2) {
//   console.log('This is a baby');
// } else if (age < 12) {
//   console.log('This is a boy');
// } else if (age < 18) {
//   console.log('This is a teenage');
// } else if (age < 60) {
//   console.log('This is a adult');
// } else {
//   console.log('This is a elder');
// };

// Q2
let fruits:string[] = ["Apple", "Mango", "Banana"];
// if (fruits.includes('Apple')) {
//   console.log('You Really Like Apple');
// } else if (fruits.includes('Banana')) {
//   console.log('You Really Like Banana');
// } else if (fruits.includes("Mango")) {
//   console.log('You really likes Mango');
// };

// Q3
let usernames = ['Admin', 'user1', 'user2', 'user3', 'user4'];
usernames.forEach(username => {
  if(username === 'Admin'){
    console.log('Hello admin would you like to see todays report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  };
});