//24.5 

// array element squre koro

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