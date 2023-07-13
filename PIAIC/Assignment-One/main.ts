// 2
const person = "John";
console.log(`Hello ${person}, would you like to learn some python today.`);

// 3
// This program is used to convert a string to Upper Case, Lower Case & Title Case.
const women = "emily";
console.log(women.toUpperCase());
console.log(women.toLowerCase());
const titleCase = women.charAt(0).toUpperCase() + women.slice(1).toLowerCase();
console.log(titleCase);

// 4
const favPerson = "Muhammad Ali Jinnah";
console.log(`${favPerson} once said, "Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man"`);

// 5
const famous_person = "Elon Musk";
const messsage = `${famous_person} was the CEO of twitter`;
console.log(messsage);

// 6
const favourite_person = "\t\n   John   \n\t";
// JSON.stringify is used to convert the favourite_person string to a JSON representation. By printing the JSON string, you will see the actual representation of the string, including the special characters "\t" and "\n" in the output.
console.log(JSON.stringify(favourite_person));
console.log(favourite_person.trim());

// 7
console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(40 / 5);

// 9
const favNumber = 7;
const myFavNumber = `My favourite number is ${favNumber}`;
console.log(myFavNumber);

// 11
const names = ["Asim", "Akmal", "Shahid", "Aftab", "Haider"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 12
for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} is my friend.`);
}

// 13
const modeOfTransport = ["Car", "Motorcycle", "Aeroplane"];
for (let i = 0; i < modeOfTransport.length; i++) {
    console.log(`I would love to travel by ${modeOfTransport[i]}`);
}

// 14
const guestList = ["Charles Babbage", "Anders Hejlsberg", "Nikola Tesla"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, I would like to invite you on dinner.`);
}
console.log(`${guestList[0]} can't make it to the dinner.`);

// 15
guestList[0] = "Imran Khan";
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, I would like to invite you on dinner.`);
}

// 16
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, I just found a bigger table.`);
}
const firstGuest = guestList.unshift("Muhammad Ali Jinnah");
const middleGuest = guestList.splice(2, 0, "Jabir Ibn Hayyan");
const lastGuest = guestList.push("Albert Einstein");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello ${guestList[i]}, I would like to invite you on dinner.`);
}

// 17
console.log("Alas, I can invite only two people for dinner");
while (guestList.length > 2) {
    let guest = guestList.pop();
    console.log(`${guest} I am sorry I can't invite you to dinner.`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]} You're still invited`);
}
const arrayCopy = guestList.slice();
while (guestList.length > 0) {
    guestList.pop();
}
console.log(guestList);

// 18
const places = ["Venice", "Paris", "Cape Town", "Tokyo", "Bali"];
console.log(places);
const sortedArray = places.slice();
const array = sortedArray.sort();
console.log(array);
console.log(places);
console.log(array.reverse());
console.log(places);
console.log(places.reverse());
console.log(places.reverse());
console.log(places.sort());
console.log(places.reverse());

//19
console.log(arrayCopy);
console.log(`I'm inviting ${arrayCopy.length} people on dinner.`);

//20
const list = ["Mount Everest", "K2", "Amazon River", "Nile River", "Pakistan", "Spain"];

//21
const mountain = {
    mountainName: "Mount Everest",
    height: "8,849 m"
}

const river = {
    riverName: "Amazon",
    length: "6,400 km"
}

const country = {
    countryName: "Pakistan",
    region: "South Asia"
}

//22
//console.log(list[6]);

//23
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');

console.log("Is car > 'toyota'? I predict False.");
console.log(car > 'toyota');

console.log("Is car < 'volvo'? I predict True.");
console.log(car < 'volvo');

//24
let stringOne = "Hello";
let stringTwo = "World";

console.log("Is stringOne == stringTwo? I predict false.");
console.log(stringOne == stringTwo);

console.log("Is stringOne != stringTwo? I predict true.");
console.log(stringOne != stringTwo);

let string1 = "Hello";
let string2 = "hello";

console.log("Is string1.toLowerCase() === string2.toLowerCase()? I predict true.");
console.log(string1.toLowerCase() === string2.toLowerCase());

console.log("Is string1.toLowerCase() !== string2.toLowerCase()? I predict false.");
console.log(string1.toLowerCase() !== string2.toLowerCase());

let numberOne = 10;
let numberTwo = 20;

console.log("Is numberOne == numberTwo? I predict false.");
console.log(numberOne == numberTwo);

console.log("Is numberOne != numberTwo? I predict true.");
console.log(numberOne != numberTwo);

console.log("Is numberOne > numberTwo? I predict false.");
console.log(numberOne > numberTwo);

console.log("Is numberOne < numberTwo? I predict true.");
console.log(numberOne < numberTwo);

console.log("Is numberOne >= numberTwo? I predict false.");
console.log(numberOne >= numberTwo);

console.log("Is numberOne <= numberTwo? I predict true.");
console.log(numberOne <= numberTwo);

let booleanOne = true;
let booleanTwo = false;

console.log("Is booleanOne && booleanTwo? I predict false.");
console.log(booleanOne && booleanTwo);

console.log("Is booleanOne || booleanTwo? I predict true.");
console.log(booleanOne || booleanTwo);

console.log("Does the list includes Pakistan? I predict true.")
console.log(list.includes("Pakistan"));

console.log("Does the list includes Bangladesh? I predict false.")
console.log(list.includes("Bangladesh"));

//25
let alienColor = "green";
if (alienColor == "green") {
    console.log("Congratulations! You just earned 5 points.");
}

alienColor = "red";
if (alienColor == "green") {
    console.log("Congratulations! You just earned 5 points.");
}

//26
let alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.")
} else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.")
}

//27
if (alien_color == "green") {
    console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
} else if (alien_color == "red") {
    console.log("You earned 15 points.");
}

//28
let age = 20;

if (age < 2) {
    console.log("Baby");
} else if (age == 2 && age < 4) {
    console.log("Toddler");
} else if (age == 4 && age < 13) {
    console.log("Kid");
} else if (age == 13 && age < 20) {
    console.log("Teenager");
} else if (age == 20 && age < 65) {
    console.log("Adult");
} else if (age >= 65) {
    console.log("Elder");
}

//29
const favouriteFruits = ["Strawberry", "Mango", "Peach"];
if (favouriteFruits.includes("Strawberry")) {
    console.log("I really like strawberries");
}
if (favouriteFruits.includes("Mango")) {
    console.log("I really like mangoes");
}
if (favouriteFruits.includes("Peach")) {
    console.log("I really like peach");
}
if (favouriteFruits.includes("Banana")) {
    console.log("I really like bananas");
}
if (favouriteFruits.includes("Apple")) {
    console.log("I really like apple");
}

//30
const userName = ["johnsmith", "janedoe", "mikebrown", "emilyjones", "admin"]
for (let i = 0; i < userName.length; i++) {
    if (userName[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else if (userName[i] != "admin") {
        console.log(`Hello ${userName[i]}, thank you for logging in again`);
    }
}

//31
while (userName.length > 0) {
    userName.pop();
}
if (userName.length == 0) {
    console.log("We need to find more users");
}

//32
const currentUsers = ["aamir", "Usman", "shahid", "asim", "omer"];
const newUsers = ["sohaib", "anas", "USMAN", "omer", "hafeez"];
for (let i = 0; i < newUsers.length; i++) {
    const newUser = newUsers[i];
    const nameExist = currentUsers.some((user) => user.toLowerCase() == newUser.toLowerCase());

    if (nameExist) {
        console.log(`Username ${newUser} is not available. Please enter a new username.`)
    } else {
        console.log(`Username ${newUser} is available.`)
    }
}

//33
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        console.log(`${numbers[i]}st`);
    } else if (numbers[i] == 2) {
        console.log(`${numbers[i]}nd`);
    } else if (numbers[i] == 3) {
        console.log(`${numbers[i]}rd`);
    } else {
        console.log(`${numbers[i]}th`);
    }
}

//34
const pizzas = ["Supreme", "BBQ", "Pepperoni", "Fajita", "Mediterranean"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
}
console.log("I really love pizza!");
console.log("Some of my favorite pizzas are BBQ, Pepperoni, and Fajita.");
console.log("The combination of flavors and toppings on pizzas is simply irresistible!");

//35
const animals = ["dog", "cat", "rabbit"];
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
console.log("These animals share the characteristic of being popular choices as pets.");
console.log("Any of these animals would make a great pet!");

//36 & 37
const makeShirt = (size: string = "L", messsage: string = "I love Typescript") => {
    console.log(`Size: ${size}, Message: ${messsage}`);
}

makeShirt('XL', 'Hello World!');

//38
const describeCity = (city: string, country: string = "Pakistan") => {
    console.log(`${city} is in ${country}`);
}

describeCity('Hyderabad', 'Pakistan');
describeCity('Multan', 'Pakistan');
describeCity('New York', 'USA');

//39
const cityCountry = (city: string, country: string) => {
    return `"${city}, ${country}"`;
}

console.log(cityCountry('Karachi', 'Pakistan'));
console.log(cityCountry('Lahore', 'Pakistan'));
console.log(cityCountry('Faisalabad', 'Pakistan'));

//40
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}
const makeAlbum = (artist: string, title: string, tracks?: number) => {
    const album: Album = {
        artist: artist,
        title: title
    }

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

const albumOne = makeAlbum("Taylor Swift", "Folklore");
const albumTwo = makeAlbum("Ed Sheeran", "Divide", 16);
const albumThree = makeAlbum("Adele", "21", 12);

console.log(albumOne);
console.log(albumTwo);
console.log(albumThree);

//41
const magician = ["Harry Houdini", "David Copperfield", "Derren Brown", "Penn Jillette", "Teller"];
const showMagician = (show: string[]) => {
    for (let i = 0; i < show.length; i++) {
        console.log(`${show[i]}`);
    }
}

//42
const makeGreat = (names: string[]) => {
    for (let i = 0; i < names.length; i++) {
        names[i] = `The Great ${names[i]}`;
    }
};

//43
const magicianCopy = magician.slice();

showMagician(magician);
makeGreat(magicianCopy);
showMagician(magicianCopy);

//44
const sandwichItems = (items: string[]) => {
    console.log("Sandwich Items:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
};

sandwichItems(["Chicken", "Ketchup", "Mayo"]);
sandwichItems(["Tomato", "Turkey", "Cheese"]);
sandwichItems(["Avocado", "Lettuce", "Chicken"]);

//45
interface carInfo {
    manufacturer: string;
    model: string;
    [key: string]: any;
}
const carInfo = (manufacturer: string, model: string, ...options: [string, any][]) => {
    const carInfo: carInfo = {
        manufacturer,
        model
    };

    for (const [key, value] of options) {
        carInfo[key] = value;
    }

    return carInfo;
}

const myCar = carInfo("Toyota", "Camry", ["color", "blue"], ["year", 2022], ["features", ["backup camera", "leather seats"]]);
console.log(myCar);