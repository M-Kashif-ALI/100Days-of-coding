"use strict";
//DAY 1:
Object.defineProperty(exports, "__esModule", { value: true });
// Q1
var Name = "Kashif Ali";
// console.log(`Hello ${Name}, would you like to learn some TypeScript today?`);
// Q2
var personName = 'Ali';
// console.log(personName.toLowerCase());
// console.log(personName.toUpperCase());
// console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
// DAY 2:
// Q1 & 2
var person = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new.";
// console.log(`${person} once said, ${quote}`);
// Q3
var aName = "\t\n Kashif Ali \t\n";
// console.log(aName);
// console.log(aName.trim());
// DAY 3:
// Q1 & 2
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);
// Q3
var myFavouriteNum = 6;
// console.log(`My favourite number is ${myFavouriteNum}`);
// DAY 4:
// Q2 
// let names = ['Arham', 'Zain', 'Mudassir'];
// for(let i = 0; i < names.length; i++){
//   console.log(`Hi ${names[i]}, have a nice day`);
// };
// Q3
var names = ['Arham', 'Zain', 'Mudassir'];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    // console.log(`Hi ${name}, have a nice day`);
}
;
// DAY5:
// Q1
var myFavTransportation = ['Tesla car', 'Honda motorcycle'];
myFavTransportation.forEach(function (transport) {
    // console.log(`I like to had a ${transport}.`); 
});
// Q2
var listOfPeopleToInvite = ['Arham', 'Zain', 'Mudassir'];
listOfPeopleToInvite.forEach(function (guest) {
    // console.log(`Dear ${guest} you are invited to had a dinner with us.`);
});
// Q3 
var unableToAttend = 'Zain';
// console.log(`${unableToAttend} can not make it.`);
var newGuest = 'sheharyar';
listOfPeopleToInvite[listOfPeopleToInvite.indexOf(unableToAttend)] = newGuest;
listOfPeopleToInvite.forEach(function (guest) {
    // console.log(`Dear ${guest}, you are invited to had a dinner with us.`);
});
// DAY6:
// Q1
var guests = ['Arham', 'sheharyar', 'Mudassir'];
// console.log('Great news! I have found a bigger dinner table');
guests.push('Shoukat');
guests.splice(guests.length / 2, 0, 'Muzammil');
guests.unshift('Salman');
guests.forEach(function (guest) {
    // console.log(`Dear ${guest}, you are invited to had a dinner with us.`);
});
// Q2
// console.log('Sorry! for bad news bigger table won,t arrive in time');
while (guests.length > 2) {
    var removedguest = guests.pop();
    // console.log(`Sorry ${removedguest} I can't invite you to dinner.`);
}
;
guests.forEach(function (guest) {
    // console.log(`Dear ${guest}, you are invited to had a dinner with us.`);
});
guests.splice(0, guests.length);
// console.log(guests);
// Q3
var places = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
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
var Guests = ['Arham', 'sheharyar', 'Mudassir', 'Zain', 'Sulaiman'];
// console.log(`I am inviting ${Guests.length} people to dinner with me`);
// Q2
var countriesILikeToVisit = ['Dubai', 'saudia Arabia', 'Canada'];
// console.log('Countries i like to visit', countriesILikeToVisit);
// Q3
var car = {
    name: 'Toyota',
    color: 'white',
    model: 2023
};
// console.log(`Car name is ${car.name} and color it's ${car.color} and is model number is ${car.model}`);
// DAY 8:
// Q1
var friend = ['shoukat', 'Abdullah', 'Maaz'];
// console.log(friend[3]);
// console.log(friend[2]);
// Q2
var Car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(Car == 'subaru'); // True
console.log("Is car == 'toyota'? I predict False.");
console.log(Car == 'toyota'); // False
