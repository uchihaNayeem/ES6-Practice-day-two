// 24.02

//TRUTHY AND FALSY VALUES

//All Falsy's
let name ;
let name1 = 0;
let name2 = undefined;
let name3= ``; // just empty string is also falsey
let name4 = false;
let name5 = NaN;
let name6 = null;

//All Thuthy

let nam = ` `;
let nam1 = `My Name`;
let nam2 = true;


if (name6) {
  console.log(`this is true`);
  
}else{
  console.log(`This is false`);
}

/* another example */

let namay = 0;

if (namay || namay == 0) {
  console.log(`this is true`);
  
}else{
  console.log(`This is false`);
}



/* --- END --- */

//24.03 
// NULL VS UNDEFINED, DIFFERENT WAYS YOU WILL GET UNDEFINED

// undefind, holo jeta set korinai but ani call kortesi

let garment;
console.log(garment); // value na dile undefined

function garmentCloth(cloth){
  console.log(`this is ${cloth}`);
}

garmentCloth(); //parameter pass na korle & `return` na dile

function garmentMachine(){
  const add = 12 + 12;
  console.log(add);
  return add
}

garmentMachine();


let kokohnoVarEmptyHoleOrPlaceKhaliHole = null; //... use kore








/* --- END --- */
//24.4 
//DOUBLE EQUAL (==) VS TRIPLE EQUAL (===), IMPLICIT CONVERSION
/* --- END --- */
//24.5 
//MAP, FILTER, FIND, SMART WAY TO RUN FOR LOOP
/* --- END --- */
//24.6 
//APPLY MAP, FILTER, FIND ON AN ARRAY OF OBJECTS
/* --- END --- */
//24.7 
//SCOPE, BLOCK SCOPE, ACCESS OUTER SCOPE VARIABLE
/* --- END --- */
//24.8 
//CLOSURE, ENCAPSULATION, PRIVATE VARIABLE
/* --- END --- */
//24.9 
//ARRAY SLICE, SPLICE, ARRAY JOIN ELEMENTS
/* --- END --- */
//24.10 
//MODULE SUMMARY AND OVERVIEW
/* --- END --- */


