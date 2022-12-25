//length returns string length
let string1 = "testTEXT"
console.log(string1.length);



// slice() slices a string from given positions
let fruits = "Banana, Apple, Kiwi";
console.log(fruits.slice(3,13));
console.log(fruits.substring(8,13));



let text = "dog , cat , wolf"
console.log(text.replace("dog", "dawg"));// use \i to ignor case sensivity, and use \g to replace all words "all dogs g xD"  

console.log(text.toUpperCase());




let textA = "A";
let textB = "B";
let textAB = textA.concat(textB);

console.log(textAB);

console.log("hello".concat(" ", "there"))
//console.log("hello"+" "+"there"))



let textWithSpace = "    SPACE     ";
console.log(textWithSpace.trim());
console.log(textWithSpace.trimStart());
console.log(textWithSpace.trimEnd());



let padtext = "text";
console.log(padtext.padStart(9,"Q"));
console.log(padtext.padEnd(9,"Q"));

let padNum = 9;
padNum = padNum.toString();
console.log(padNum.padStart(9 , "W"));



let anotherOne = "ABCDEFG";

console.log(anotherOne.charAt(5));
console.log(anotherOne[2]);

