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






const students = [
  {id: 10, name: `omar sunny`},
  {id: 12, name: `akbar`},
  {id: 13, name: `anthony`},
  {id: 14, name: `miraj`},
  {id: 15, name: `mithu`}
]




const school = students.map(s => s.name);
const schoolId = students.map(s => s.id);
const schoolId2 = students.filter(s => s.id > 13);
const schoolId3 = students.find(s => s.id > 13);
console.log(schoolId3);



/*

// for(let i = 0; i < students.length; i++){
  
//   const elements = students[i];
//   console.log(elements);
// }

const outside = [];

students.forEach(function (student) {
  var x = student.name + 2;
  console.log(x);
  outside.push(x);

});

console.log(outside);


*/




























