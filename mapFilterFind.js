//24.5 

// array element squre koro


/* ---- 1st Step ----
const number = [2, 3, 4, 5, 6, 7, 8 ,9];
const output = [];

for(let i=0; i < number.length; i++){
  // console.log(i);// 7 bar array ta colbe
  const element = number[i];
  // console.log(element); // element er vitore prottek value rakhlam
  const squre = element * element;
  // console.log(squre);
  output.push(squre);

}

console.log(`squre er value push korlam array er vitor:`, output);

*/


const number = [2, 3, 14, 5, 6, 7, 8 ,9];

// function squre(elements){
//  return elements * elements;
// }


// const squre = element => element * element;

const squre = x => x * x;

/* ---- number.map er vitore fuction

number.map(function doThis(elements, index, Array){
  const total = elements*elements;

  // console.log(total)
  console.log(elements, index, Array);

})

*/ 


const marks = [12, 13, 14, 15, 16];

const result = marks.map(x => x * x );
console.log(result);

// Q akhane index r array kivabe likhbo?

const bigger = marks.filter(x => x > 13)
console.log(bigger); // output array er vitore dekhabe


const isThere = marks.find(x => x > 13); // find shudhu akta value dekhabe
console.log(isThere);