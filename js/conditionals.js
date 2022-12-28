let customTime = 9;

if (customTime < 10 ) {
    console.log("good morning");

}else if (customTime < 20) {
    console.log("good day");
}else{
    console.log("good evening");
}



// OR ||

console.log(true || true); // same with 0 and 1 
console.log(true || false);
console.log(true || true);
console.log(false || false);

let currentTime = 10;
let isWeekend = true;

if(currentTime > 17 || currentTime < 9 || isWeekend ){
    console.log("We are closed");
}else{
    console.log("Welcome!");
}

let firstName = "";
let lastName = "";
let nickName = "joe the duck";

console.log(firstName || lastName || nickName || "Annonymous");

true || console.log("will not be printed");
false || console.log("this will be printed");//if the first one is true the other ones are ignored , it looks for the first true value



// AND &&


console.log(true  && true);
console.log(true  && false);
console.log(false && true);
console.log(false && false);


if(1 && 1){
    console.log("result of && is true");
}else{
    console.log("result of && is false"); //all values must be true , it looks for the first fasle value
}


// !(NOT)  nootnoot
// result = !value;

console.log(!true);//false
console.log(!0);//true

console.log(!!"non-empty string");// converts value into boolean

// operators precedence  ! then && then ||


// alert( alert(1) && alert(2));

let age = 90;

if(age >= 14 && age <= 90 ){
    console.log("age is in range");
}else{
    console.log("age is not in range");
}


if(age < 14 || age > 90){
    console.log("age is in range");
}else{
    console.log("age is not in range");
}




// ? operator
// let result = condition ? value1 : value2; 
// the condition is evaluated: if its truthy then value1 is returned, otherwise - value2 .

let ageN = 13;
let accessAllowed = (ageN > 18 ) ? "bonk one" : "bonk two";

console.log(accessAllowed);





// switch


let count = 3;

switch(count){
    
    case 1:
        console.log("c one");
        break;

    case 2:
        console.log("c two");
        break;
    
    case 3:
        console.log("c three");
        break;   //if we comment break the next case will run with the current one         
    default:
        console.log("this is default");
}





let grade = 42;

switch(true){    //The expression in parentheses to be evaluated is true in this example.
                // This means that any case that evaluates to true will be a match.

    case grade >= 50:   // if this is true the code will be executed
        console.log("A");
        break;
        
    case grade >= 40:
        console.log("B");
        break;        

    case grade >= 30:
        console.log("C");
        break;

    case grade >= 20:
        console.log("D");
    break;

    default:
        console.log("E");
}



let month = new Date().getMonth();
// let month = 1
console.log(month);

switch(month){
    case 0 :
    case 1 :
    case 2 :
        console.log("Winter");
        break;

    case 3 :
    case 4 :
    case 5 :
        console.log("Spring");
        break;

    case 6 :
    case 7 :
    case 8 :
        console.log("Summer");
        break;

    case 9 :
    case 10 :
    case 11 :
        console.log("Autumn");
        break;

    default:
        console.log("something went wrong.");
}






