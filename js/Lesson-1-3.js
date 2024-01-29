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
// function getFileName(file) {
//     if (file.indexOf(".") !== -1) {return file.slice ((0), file.indexOf(".")) } else {return file}

// }
// console.log(getFileName("index.js"));
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
function calculateTotalPrice(order) {
    let total = 0;
    for (let element of order) {
        total += element;
    }
    return total;
}
const result = calculateTotalPrice([12, 85, 37, 4])
console.log(result);
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
function filterArray(numbers, value) {
    let total = []
    for ( let number of numbers) {
        if (value  < number) { total.push(number)

        }
    }
    return total;
    
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]








