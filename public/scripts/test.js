/**
 *  test.js - funcs for color blindness test
 */

let norm = 0;
let rg = 0;
let prot = 0;
let deut = 0


const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomizePlates = () => {
  const init = []

  const plates = [];
  
  for(i=2; i<=24;i++) {
    init.push(`plate${i}.png`);
  }

  while(init.length > 0) {
    let index = randomNum(0, init.length);
    plates.push(init[index]);
    init.splice(index,1);
  }

  plates.unshift("plate1.png");

  return plates;
} 

const setupTest = () => {

  const plates = randomizePlates();

  const test = document.getElementById("color-test");
  test.innerHTML="";

  for(i=0; i<plates.length; i++) {
    let plate = document.createElement("img");
    plate.src=`./assets/images/test/${plates[i]}`;
    plate.alt=plates[i];
    plate.id=plates[i].slice(0, (plates[i].length - 4));

    test.insertAdjacentElement("beforeend", plate);
  } 
}
