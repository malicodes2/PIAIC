// 2
var person = "John";
console.log("Hello ".concat(person, ", would you like to learn some python today."));
// 3
// This program is used to convert a string to Upper Case, Lower Case & Title Case.
var women = "emily";
console.log(women.toUpperCase());
console.log(women.toLowerCase());
var titleCase = women.charAt(0).toUpperCase() + women.slice(1).toLowerCase();
console.log(titleCase);
// 4
var favPerson = "Muhammad Ali Jinnah";
console.log("".concat(favPerson, " once said, \"Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man\""));
// 5
var famous_person = "Elon Musk";
var messsage = "".concat(famous_person, " was the CEO of twitter");
console.log(messsage);
// 6
var favourite_person = "\t\n   John   \n\t";
// JSON.stringify is used to convert the favourite_person string to a JSON representation. By printing the JSON string, you will see the actual representation of the string, including the special characters "\t" and "\n" in the output.
console.log(JSON.stringify(favourite_person));
console.log(favourite_person.trim());
// 7
console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(40 / 5);
// 9
var favNumber = 7;
var myFavNumber = "My favourite number is ".concat(favNumber);
console.log(myFavNumber);
// 11
var names = ["Asim", "Akmal", "Shahid", "Aftab", "Haider"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// 12
for (var i = 0; i < names.length; i++) {
    console.log("".concat(names[i], " is my friend."));
}
// 13
var modeOfTransport = ["Car", "Motorcycle", "Aeroplane"];
for (var i = 0; i < modeOfTransport.length; i++) {
    console.log("I would love to travel by ".concat(modeOfTransport[i]));
}
// 14
var guestList = ["Charles Babbage", "Anders Hejlsberg", "Nikola Tesla"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ", I would like to invite you on dinner."));
}
console.log("".concat(guestList[0], " can't make it to the dinner."));
// 15
guestList[0] = "Imran Khan";
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ", I would like to invite you on dinner."));
}
// 16
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ", I just found a bigger table."));
}
var firstGuest = guestList.unshift("Muhammad Ali Jinnah");
var middleGuest = guestList.splice(2, 0, "Jabir Ibn Hayyan");
var lastGuest = guestList.push("Albert Einstein");
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello ".concat(guestList[i], ", I would like to invite you on dinner."));
}
// 17
console.log("Alas, I can invite only two people for dinner");
while (guestList.length > 2) {
    var guest = guestList.pop();
    console.log("".concat(guest, " I am sorry I can't invite you to dinner."));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], " You're still invited"));
}
var arrayCopy = guestList.slice();
while (guestList.length > 0) {
    guestList.pop();
}
console.log(guestList);
// 18
var places = ["Venice", "Paris", "Cape Town", "Tokyo", "Bali"];
console.log(places);
var sortedArray = places.slice();
var array = sortedArray.sort();
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
console.log("I'm inviting ".concat(arrayCopy.length, " people on dinner."));
//20
var list = ["Mount Everest", "K2", "Amazon River", "Nile River", "Pakistan", "Spain"];
//21
var mountain = {
    mountainName: "Mount Everest",
    height: "8,849 m"
};
var river = {
    riverName: "Amazon",
    length: "6,400 km"
};
var country = {
    countryName: "Pakistan",
    region: "South Asia"
};
//22
//console.log(list[6]);
//23
var car = 'subaru';
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
var stringOne = "Hello";
var stringTwo = "World";
console.log("Is stringOne == stringTwo? I predict false.");
console.log(stringOne == stringTwo);
console.log("Is stringOne != stringTwo? I predict true.");
console.log(stringOne != stringTwo);
var string1 = "Hello";
var string2 = "hello";
console.log("Is string1.toLowerCase() === string2.toLowerCase()? I predict true.");
console.log(string1.toLowerCase() === string2.toLowerCase());
console.log("Is string1.toLowerCase() !== string2.toLowerCase()? I predict false.");
console.log(string1.toLowerCase() !== string2.toLowerCase());
var numberOne = 10;
var numberTwo = 20;
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
var booleanOne = true;
var booleanTwo = false;
console.log("Is booleanOne && booleanTwo? I predict false.");
console.log(booleanOne && booleanTwo);
console.log("Is booleanOne || booleanTwo? I predict true.");
console.log(booleanOne || booleanTwo);
console.log("Does the list includes Pakistan? I predict true.");
console.log(list.includes("Pakistan"));
console.log("Does the list includes Bangladesh? I predict false.");
console.log(list.includes("Bangladesh"));
//25
var alienColor = "green";
if (alienColor == "green") {
    console.log("Congratulations! You just earned 5 points.");
}
alienColor = "red";
if (alienColor == "green") {
    console.log("Congratulations! You just earned 5 points.");
}
//26
var alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
//27
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
//28
var age = 20;
if (age < 2) {
    console.log("Baby");
}
else if (age == 2 && age < 4) {
    console.log("Toddler");
}
else if (age == 4 && age < 13) {
    console.log("Kid");
}
else if (age == 13 && age < 20) {
    console.log("Teenager");
}
else if (age == 20 && age < 65) {
    console.log("Adult");
}
else if (age >= 65) {
    console.log("Elder");
}
//29
var favouriteFruits = ["Strawberry", "Mango", "Peach"];
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
var userName = ["johnsmith", "janedoe", "mikebrown", "emilyjones", "admin"];
for (var i = 0; i < userName.length; i++) {
    if (userName[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else if (userName[i] != "admin") {
        console.log("Hello ".concat(userName[i], ", thank you for logging in again"));
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
var currentUsers = ["aamir", "Usman", "shahid", "asim", "omer"];
var newUsers = ["sohaib", "anas", "USMAN", "omer", "hafeez"];
var _loop_1 = function (i) {
    var newUser = newUsers[i];
    var nameExist = currentUsers.some(function (user) { return user.toLowerCase() == newUser.toLowerCase(); });
    if (nameExist) {
        console.log("Username ".concat(newUser, " is not available. Please enter a new username."));
    }
    else {
        console.log("Username ".concat(newUser, " is available."));
    }
};
for (var i = 0; i < newUsers.length; i++) {
    _loop_1(i);
}
//33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        console.log("".concat(numbers[i], "st"));
    }
    else if (numbers[i] == 2) {
        console.log("".concat(numbers[i], "nd"));
    }
    else if (numbers[i] == 3) {
        console.log("".concat(numbers[i], "rd"));
    }
    else {
        console.log("".concat(numbers[i], "th"));
    }
}
//34
var pizzas = ["Supreme", "BBQ", "Pepperoni", "Fajita", "Mediterranean"];
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza."));
}
console.log("I really love pizza!");
console.log("Some of my favorite pizzas are BBQ, Pepperoni, and Fajita.");
console.log("The combination of flavors and toppings on pizzas is simply irresistible!");
//35
var animals = ["dog", "cat", "rabbit"];
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
console.log("These animals share the characteristic of being popular choices as pets.");
console.log("Any of these animals would make a great pet!");
//36 & 37
var makeShirt = function (size, messsage) {
    if (size === void 0) { size = "L"; }
    if (messsage === void 0) { messsage = "I love Typescript"; }
    console.log("Size: ".concat(size, ", Message: ").concat(messsage));
};
makeShirt('XL', 'Hello World!');
//38
var describeCity = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
};
describeCity('Hyderabad', 'Pakistan');
describeCity('Multan', 'Pakistan');
describeCity('New York', 'USA');
//39
var cityCountry = function (city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
};
console.log(cityCountry('Karachi', 'Pakistan'));
console.log(cityCountry('Lahore', 'Pakistan'));
console.log(cityCountry('Faisalabad', 'Pakistan'));
var makeAlbum = function (artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
};
var albumOne = makeAlbum("Taylor Swift", "Folklore");
var albumTwo = makeAlbum("Ed Sheeran", "Divide", 16);
var albumThree = makeAlbum("Adele", "21", 12);
console.log(albumOne);
console.log(albumTwo);
console.log(albumThree);
//41
var magician = ["Harry Houdini", "David Copperfield", "Derren Brown", "Penn Jillette", "Teller"];
var showMagician = function (show) {
    for (var i = 0; i < show.length; i++) {
        console.log("".concat(show[i]));
    }
};
//42
var makeGreat = function (names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "The Great ".concat(names[i]);
    }
};
//43
var magicianCopy = magician.slice();
showMagician(magician);
makeGreat(magicianCopy);
showMagician(magicianCopy);
//44
var sandwichItems = function (items) {
    console.log("Sandwich Items:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
};
sandwichItems(["Chicken", "Ketchup", "Mayo"]);
sandwichItems(["Tomato", "Turkey", "Cheese"]);
sandwichItems(["Avocado", "Lettuce", "Chicken"]);
var carInfo = function (manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        carInfo[key] = value;
    }
    return carInfo;
};
var myCar = carInfo("Toyota", "Camry", ["color", "blue"], ["year", 2022], ["features", ["backup camera", "leather seats"]]);
console.log(myCar);
