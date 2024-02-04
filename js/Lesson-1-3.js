console.log(`jacob mercer`);
console.log(`26`);

// const productName = "Droid";
// const pricePerItem = 2000;

// let productName = "Droid";
// let pricePerItem = 2000;

//////////////////////

// productName = "Repair droid"
// pricePerItem = 3500;

/////////////////////

const topSpeed = 160;
const distance = 617.54;
let login = "mango935";
const isOnline = true;
let isAdmin = false;

//////////////////////
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

//////////////////////////
let a = 5;
let b = 10;
let c = 15;
let d = 20;

a += 2;
b -= 4;
c *= 3;
d /= 10;

/////////////////

// const username = "Poly";
// const message = "Welcome " + username + "!";

// console.log(message);

//////////////////////
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName} ,price per item is ${pricePerItem} credits`;

// console.log(message);

///////////////////////////////
// const priceDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = priceDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`
// console.log(message);

////////////////////////////
// const username = "Poly";
// const message = `Username ${username} is ${username.length} characters long`
// console.log(message);

//////////////////////////
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength, firstElement, lastElement);
/////////////////////////
const age = 16;
const isAdult = age >= 18;
console.log(isAdult);
/////////////////////
const correctPassword = "jqueryismyjam";
const userPassword = "jqueryismyjam";
const isValid = correctPassword === userPassword;
console.log(isValid);
///////////////////////////////
const value = "24.5px";
const numerical = Number.parseFloat(value);
console.log(numerical);
//////////////////////
function sayHi () {
    console.log(`Hello, this is my first function!`);
}
sayHi();
/////////////////////
// function add(a, b, c) {
//     const result = a + b + c;
//   console.log(`Addition result equals ${result}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

/////////////////////////
// function add(a, b, c) {
//         return a + b + c;
    
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function makeMessage(name, price) {
//     const message = `You picked ${name} , price per item is ${price} credits`
//     console.log(message);

// };
// makeMessage();

// makeMessage('Radar', 6150)
///////////////////////////
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     return (orderedQuantity + pricePerItem);
    

// }; 

// calculateTotalPrice(5, 100)
// calculateTotalPrice(8, 60)
// calculateTotalPrice(3, 400)
// calculateTotalPrice(1, 3500)
// calculateTotalPrice(12, 70)

////////////2 lesson/////////////////

function checkAge(age) { 
    if (age >= 18) { return `You are an adult` } else { return `net` }
        return `You are an adult`
}
console.log(checkAge(20));

////////////////////////////
// function checkStorage(available, ordered) {
//    if (ordered >= available) {return `Not enough goods in stock!`} else {return `Order is processed, our manager will contact you`}
// }
// console.log(checkStorage(200, 20));
//////////////////////////////////////////
// function checkStorage(available, ordered) {
//     if(ordered <= 0) {return `There are no products in the order!`} else if (ordered > available) {return `Your order is too large, there are not enough items in stock!`} else  {return `The order is accepted, our manager will contact you`}
// }
// console.log(checkStorage(40, 40));

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     return password === correctPassword ? `Access granted` : `Access denied, wrong password!`
// }
// console.log(checkPassword("angul4r1sl1f3"));
// ///////////////////////////////////////
// function getSubscriptionPrice(type) {
//     switch (type) {
//         case `starter`: return `0`
//             break
//         case `professional`: return `20`
//             break
//         case `organization`: return `50`
//             break
//         default: return `Invalid subscription type!`
//     }

//     }
// console.log(getSubscriptionPrice("professional"));
//     ////////////////////////////

// function isNumberInRange(start, end, number) {
       
//     return (start >= number && number <= end);
// }

// console.log(isNumberInRange(10, 30, 17));
// /////////////////////////////
// function checkAccess(subType) {
//     return subType === `pro` || subType === `vip`
// }
// console.log(checkAccess("starter"));
// ////////////////////////////////////
// function toggleModalVisibility(isVisible) {
//     return (!isVisible)
// }
// console.log(toggleModalVisibility(true));
// ///////////////////////////////////////
// function getSubstring(string, length) {
//     return string.slice(0, length)
// }
// console.log(getSubstring("Hello world", 3));
// //////////////////////////////////////////
// function normalizeInput(input, to) {
//     if (to === `lower`) { return normalizeInput = input.toLowerCase() } else if (to === `upper`) { return normalizeInput = input.toUpperCase() }
// }
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// ///////////////////////////////////////
// function checkForName(fullName, firstName) {
//     return checkForName = fullName.toUpperCase().includes(firstName.toUpperCase())
// }
// console.log(checkForName("Jason Neis", "Jacob"));
// ///////////////////////////////////////
// function checkFileExtension(fileName, ext) {
//     if (fileName.endsWith(ext)) {return `File extension matches`} else {return `File extension does not match`}
// }
// console.log(checkFileExtension("styles.css", ".js"));
// //////////////////////////////////////
function getFileName(file) {
    if (file.indexOf(".") !== -1) {return file.slice ((0), file.indexOf(".")) } else {return file}

}
console.log(getFileName("index.js"));
// //////////////////////////////////////
// function createFileName(name, ext) {
//     return name.trim() +`.` + ext.trim(``);
// }
// console.log(createFileName(" presentation", "xml"));
// /////////////////////////////////////
// // function calculateTotal(number) {
// //     let sum = 0;
// //     for (let i = 0; i <= number; i++) { 
// //     sum += i;
// // }
// //     return sum;
    
// // }
// // console.log(calculateTotal(7));

// //////////////////////////////////
// function calculateEvenTotal(number) {
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//         if (i % 2 === 0) {
//             sum += i;  
//         }            
//     }
//     return sum;
    

// }

// // const result = calculateEvenTotal(7);
// // console.log(result);
// ///////////////////////////////////
// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i++) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
    
// }
// //////////////////////////////////
// function findNumber(start, end, divisor) {
    
//   for (let i=start; i <=end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// findNumber();
// const result = findNumber(1, 20, 5);
// console.log(findNumber(1, 20, 5));
////////////3 lesson////////////

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1]
// console.log(lastElement);
///////////////////////////////////
// function getLastElementMeta(array) {
//   const last = array.length - 1;
//   const lastElements = array[last]
//   return [last, lastElements]
// }

// const resul = getLastElementMeta(["apple", "peach", "pear"])
// console.log(resul);
/////////////////////////////////////
// function getExtremeElements(array) {
//     const lastEl = array.length-1;
//     const elem = array[lastEl]
//     return [array[0], elem];
// }
// const res = getExtremeElements(["Earth", "Mars", "Venus"]);
// console.log(res);
///////////////////////
// function getLength(array) {
//     return array.join(``).length;
// }
// const res = getLength(["top", "picks", "for", "you"])
// console.log(res);
////////////////////////////
// function calculateEngravingPrice(message, pricePerWord) {
//     const elem = message.split(` `).length
//     return elem * pricePerWord;
// }
// const result = calculateEngravingPrice("JavaScript is in my blood", 10)
// console.log(result);
//////////////////////////////////
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2) ;
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);
console.log(firstTwoEls, nonExtremeEls, lastThreeEls);
/////////////////////////////////
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);
console.log(allClients);
///////////////////////////////////////
// function getSlice(array, value) {
//     if (array.indexOf(value) === -1) { return [] }
//     else { return array.slice(0, array.indexOf(value)+1) }
// }
// const result = getSlice(["Mango", "Poly", "Ajax"], "Ajax")
// console.log(result);
/////////////////////////////////////
// function createArrayOfNumbers(min, max) {
//     const sum =[]
//     for (let i = min; i <= max; i+=1){
//         sum.push(i);
//     }
//     return sum;    
// }
// const result = createArrayOfNumbers(1, 3);
// console.log(result);
/////////////////////////////
// function calculateTotalPrice(order) {
//     let sum = 0;
//     for (let i = 0; i < order.length; i++){
//         sum += order[i]
//     }
//     return sum;
// }
// const result = calculateTotalPrice([12, 85, 37, 4]);
// console.log(result);
////////////////////////////////////
// function getEvenNumbers(start, end) {
//     let total = [];
//     for (let i = start; i <= end; i++){
//         if (i % 2 === 0) {
//             total.push(i)
//         } 
//     }
//     return total;   
    
// }
// const result = getEvenNumbers(3, 11)
// console.log(result);
/////////////////////////////
// function checkStorage(storage, item) {
//     const elements = item.toLowerCase();
//     if (storage.includes(elements)){return `${elements} is available to order!`} else {return `Sorry! We are out of stock!`}

// }
// const res = checkStorage(["apple", "plum", "pear"], "orange")
// console.log(res);
///////////////////////////////////////
function getCommonElements(array1, array2) {
    let elem = []
    for (let i = 0; i <= array1.length; i++) {
        if (array2.includes(array1[i])) {
            elem.push(array1[i])
        }
    }
    return elem;
}
const resultTotal = getCommonElements([1, 2, 3], [2, 1, 17, 19])
console.log(resultTotal);
////////////////////////////
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let element of order) {
//         total += element;
//     }
//     return total;
// }
// const result = calculateTotalPrice([12, 85, 37, 4])
// console.log(result);
///////////////////////////////
function createReversedArray() {
    const arr = Array.from(arguments)
    return arr.toReversed()

}
const total = createReversedArray(12, 85, 37, 4);
console.log(total);
//////////////////////////////
function calculateTax(amount, taxRate) {
    return amount * taxRate
}
const aaa = calculateTax(200, 0.2)
console.log(aaa);
/////////////////////////////////
function slugify(title) {
        return title.split(` `).join(`-`).toLowerCase();
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
///////////////////////////////////////////////////////
function makeArray(firstArray, secondArray, maxLength) {
    if (firstArray.concat(secondArray).length >= maxLength) 
    {return firstArray.concat(secondArray).slice(0, maxLength)}
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
//////////////////////////////////////////////////////////
// function filterArray(numbers, value) {
//     let total = []
//     for ( let number of numbers) {
//         if (value  < number) { total.push(number)

//         }
//     }
//     return total;
    
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
////////////4 lesson////////////////////
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"]

// }
////////////////////////////////////////////
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
//   };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted")
///////////////////////////////////
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston"
// }
//////////////////////////////////////
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags
};
///////////////////////////////
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};
///////////////////////////////////

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };


// const keys = [];
// const values = [];
// for (let key in apartment){
// keys.push(key);
// values.push(apartment[key])
// }
// console.log(keys);   // ["descr", "rating", "price"]
// console.log(values);
/////////////////////////////////
// const books = {
//     Year: 2000,
//     author: "kipling",
//     name: "aggy",
// };

// const properties = []
// const data = []
// for (const book in books) {
//     properties.push(book);
//     data.push(books[book]);

// };
// console.log(properties);
// console.log(data);
/////////////////////
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key])
// };
// console.log(keys);
// console.log(values);
///////////////////////////////
function countProps(object) {
  let propCount = Object.keys(object).length;  

  return propCount;
}
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
/////////////////////////////////////
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);
console.log(keys);
console.log(values);
//////////////////////////////////
function countTotalSalary(salaries) {
    let totalSalary = 0;
    const sum = Object.values(salaries);
    for (const value of sum) {
        totalSalary += value;
    }
    return totalSalary;
     
};
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
/////////////////////////////////
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
for (const color of colors) {
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);

}
console.log(hexColors);
console.log(rgbColors);
/////////////////////////
function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
    ];
    for (const product of products) {
        if (product.name === productName) {return product.price }
        
    }
       return null;  
    }
console.log(getProductPrice("Radar"));
////////////////////////////////////
    function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
        ];
        const item = [];
        for (const product of products) {
            if (propName in product) {
              item.push(product[propName]) 
            }
            
        }
        return item;
}
console.log(getAllPropValues("quantity"));
//////////////////////////////////////
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     for (const product of products) {
//         if (productName === product.name) {
//             return product.price * product.quantity
//         }
//     }
//     return `Product ${productName} not found!`
// }
// console.log(calculateTotalPrice("Blaster"));
//////////////////////////////////////
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//     },
    
// };
// console.log(atTheOldToad.getPotions());
////////////////////////////////////
// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//     addPotion(potionName) {
//       this.potions.push(potionName)
//   }
// };
// atTheOldToad.addPotion("Invisibility");
// console.log(atTheOldToad.getPotions());
////////////////////////////////
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
    getTotalPrice() {
        let total = 0;
        for (const potion of this.potions) {
            total += potion.price;
        }
        return total;
    },
    
};
//////////////////////////////
function calcAverageCalories(days) {
    let totalCalories = 0;
    for (let day of days) {
        totalCalories += day.calories
    }
    if (totalCalories <= 0) { return totalCalories } else {
        return totalCalories / days.length
    }
}
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0
/////////////////////////////
const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName) {
        this.username = newName;
    },
    updatePlayTime(hours) {
        this.playtime += hours
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`
    }
};
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

/////////////////////////////
function add(...args) {
return args.reduce((sum, num) => sum + num, 0);
}
////////////////////////////////////////
function addOverNum(value, ...args) {
  let total = 0;
  for (const arg of args) {
    if (value < arg) {
      total += arg
    }
  }
  return total;
}
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
/////////////////////////////////////
function getExtremeScores(scores) {
  const max = Math.max(...scores);
  const min = Math.min(...scores);
  return `best:${max},worst:${min}` 
}
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
///////////////////////////////
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
/////////////////////////////////////
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };
////////////////////////////////
function isEnoughCapacity(products, containerSize) {
    let total = 0;
    for (const product in products) {
        total += products[product];
       
    }
    
    return total <= containerSize;
}
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false
///////////5 lesson///////////////////
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`)
  
});
///////////////////////////////////
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//     orderedItems.forEach(function(number) {
//         totalPrice += number;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
////////////////////////////////////
function filterArray1(numbers, value) {
    let total = [];
    numbers.forEach(function (number) {
        if (number > value) {
            return total.push(number)
        }
    })
    return total;
}
console.log(filterArray1([1, 2, 3, 4, 5], 3));
////////стрілочні функції /////////
const calculateTotalPrice1 = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
}
////////////варіани повернення////(явне)/////
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
///////////(неявне)///////////////////
const calculateTotalPrice2 = (quantity, pricePerItem) => quantity * pricePerItem;
////////////////////////////////////////
const calculateTotalPrice3 = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
console.log(calculateTotalPrice3([12, 85, 37, 4]));
///////////////////////////////
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 4));
////////////////////////////
const changeEven = (numbers, value) => {
    let newChangeEven = [];
    numbers.forEach((number) => {
        if (number % 2 === 0) {
            newChangeEven.push(number+value)
              } else {newChangeEven.push(number)}
    });
    return newChangeEven;
};

console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
////////////////MAP//////////////////
const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths);
//////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);
//////////FLATMAP////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);
////////FILTER///////////////
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 === 1);
console.log(evenNumbers);
console.log(oddNumbers);
////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);
//////////////////////////////
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(user => user.age > minAge && user.age < maxAge)
};
///////////FIND////////////////////
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

console.log(bookWithTitle);
console.log(bookByAuthor);
///////EVERY/////////////////
const isEveryUserActive = (users) => {
  return users.every(user => user.isActive === true)
};
////////////SOME//////////////
const isAnyUserActive = (users) => {
  return users.some(user => user.isActive === true)
};
///////////reduce///////////////
const players1 = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players1); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((total, playtime) => 
  playtime + total, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime);
////////////////////////////////
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((total, player) => total + player.playtime / player.gamesPlayed, 0);
console.log(totalAveragePlaytimePerGame);
//////////toSorted////////////
const releaseDates1 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates1 = releaseDates1.toSorted();

const alphabeticalAuthors1 = authors.toSorted();
console.log(ascendingReleaseDates1);
console.log(alphabeticalAuthors1);
///////////////////////////////
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = releaseDates.toSorted((a, b) => a-b);

const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
console.log(ascendingReleaseDates);
console.log(descendingReleaseDates);
///////////////////////////////
const authors3 = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = authors3.toSorted((a,b)=> a.localeCompare(b));

const authorsInReversedOrder = authors3.toSorted((a, b) => b.localeCompare(a));
console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);
/////////////////////////////
const books5 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

const sortedByAuthorName = books5.toSorted((author1, author2)=> author1.author.localeCompare(author2.author));

const sortedByReversedAuthorName = books5.toSorted((author1, author2)=> author2.author.localeCompare(author1.author));

const sortedByAscendingRating = books5.toSorted((a,b)=> a.rating - b.rating);

const sortedByDescentingRating = books5.toSorted((a, b) => b.rating - a.rating);
console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);
/////////////////////////////////
const books6 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books6.filter((book) => book.rating >= MIN_BOOK_RATING).map(book => book.author).toSorted((a, b) => a.localeCompare(b));
console.log(names);











    










