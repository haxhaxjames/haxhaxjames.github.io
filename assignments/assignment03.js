let elem = [];
let totals = [];
// assign the entire table row for hole 1 to a variable, elem
elem[1] = document.getElementById("one");
elem[2] = document.getElementById("2");
elem[3] = document.getElementById("3");
elem[4] = document.getElementById("4");
elem[5] = document.getElementById("5");
elem[6] = document.getElementById("6");
elem[7] = document.getElementById("7");
elem[8] = document.getElementById("8");
elem[9] = document.getElementById("9");
elem[10] = document.getElementById("10");
elem[11] = document.getElementById("11");
elem[12] = document.getElementById("12");
elem[13] = document.getElementById("13");
elem[14] = document.getElementById("14");
elem[15] = document.getElementById("15");
elem[16] = document.getElementById("16");
elem[17] = document.getElementById("17");
elem[18] = document.getElementById("18");
totals[1] = document.getElementById("totals");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

//total in all of the buttons, so change is always calced

// assign a function to the + button
elem[1].children[4].children[0].onclick = function(){add1(elem[1]);total(elem[1]);};
elem[2].children[4].children[0].onclick = function(){add1(elem[2]);total(elem[2]);};
elem[3].children[4].children[0].onclick = function(){add1(elem[3]);total(elem[3]);};
elem[4].children[4].children[0].onclick = function(){add1(elem[4]);total(elem[4]);};
elem[5].children[4].children[0].onclick = function(){add1(elem[5]);total(elem[5]);};
elem[6].children[4].children[0].onclick = function(){add1(elem[6]);total(elem[6]);};
elem[7].children[4].children[0].onclick = function(){add1(elem[7]);total(elem[7]);};
elem[8].children[4].children[0].onclick = function(){add1(elem[8]);total(elem[8]);};
elem[9].children[4].children[0].onclick = function(){add1(elem[9]);total(elem[9]);};
elem[10].children[4].children[0].onclick = function(){add1(elem[10]);total(elem[10]);};
elem[11].children[4].children[0].onclick = function(){add1(elem[11]);total(elem[11]);};
elem[12].children[4].children[0].onclick = function(){add1(elem[12]);total(elem[12]);};
elem[13].children[4].children[0].onclick = function(){add1(elem[13]);total(elem[13]);};
elem[14].children[4].children[0].onclick = function(){add1(elem[14]);total(elem[14]);};
elem[15].children[4].children[0].onclick = function(){add1(elem[15]);total(elem[15]);};
elem[16].children[4].children[0].onclick = function(){add1(elem[16]);total(elem[16]);};
elem[17].children[4].children[0].onclick = function(){add1(elem[17]);total(elem[17]);};
elem[18].children[4].children[0].onclick = function(){add1(elem[18]);total(elem[18]);};
// assign a function to the - button
elem[1].children[4].children[1].onclick = function(){sub1(elem[1]);total(elem[1]);};
elem[2].children[4].children[1].onclick = function(){sub1(elem[2]);total(elem[2]);};
elem[3].children[4].children[1].onclick = function(){sub1(elem[3]);total(elem[3]);};
elem[4].children[4].children[1].onclick = function(){sub1(elem[4]);total(elem[4]);};
elem[5].children[4].children[1].onclick = function(){sub1(elem[5]);total(elem[5]);};
elem[6].children[4].children[1].onclick = function(){sub1(elem[6]);total(elem[6]);};
elem[7].children[4].children[1].onclick = function(){sub1(elem[7]);total(elem[7]);};
elem[8].children[4].children[1].onclick = function(){sub1(elem[8]);total(elem[8]);};
elem[9].children[4].children[1].onclick = function(){sub1(elem[9]);total(elem[9]);};
elem[10].children[4].children[1].onclick = function(){sub1(elem[10]);total(elem[10]);};
elem[11].children[4].children[1].onclick = function(){sub1(elem[11]);total(elem[11]);};
elem[12].children[4].children[1].onclick = function(){sub1(elem[12]);total(elem[12]);};
elem[13].children[4].children[1].onclick = function(){sub1(elem[13]);total(elem[13]);};
elem[14].children[4].children[1].onclick = function(){sub1(elem[14]);total(elem[14]);};
elem[15].children[4].children[1].onclick = function(){sub1(elem[15]);total(elem[15]);};
elem[16].children[4].children[1].onclick = function(){sub1(elem[16]);total(elem[16]);};
elem[17].children[4].children[1].onclick = function(){sub1(elem[17]);total(elem[17]);};
elem[18].children[4].children[1].onclick = function(){sub1(elem[18]);total(elem[18]);};
// assign a function to the 'C' button
elem[1].children[4].children[2].onclick = function(){clear(elem[1]);total(elem[1]);};
elem[2].children[4].children[2].onclick = function(){clear(elem[2]);total(elem[2]);};
elem[3].children[4].children[2].onclick = function(){clear(elem[3]);total(elem[3]);};
elem[4].children[4].children[2].onclick = function(){clear(elem[4]);total(elem[4]);};
elem[5].children[4].children[2].onclick = function(){clear(elem[5]);total(elem[5]);};
elem[6].children[4].children[2].onclick = function(){clear(elem[6]);total(elem[6]);};
elem[7].children[4].children[2].onclick = function(){clear(elem[7]);total(elem[7]);};
elem[8].children[4].children[2].onclick = function(){clear(elem[8]);total(elem[8]);};
elem[9].children[4].children[2].onclick = function(){clear(elem[9]);total(elem[9]);};
elem[10].children[4].children[2].onclick = function(){clear(elem[10]);total(elem[10]);};
elem[11].children[4].children[2].onclick = function(){clear(elem[11]);total(elem[11]);};
elem[12].children[4].children[2].onclick = function(){clear(elem[12]);total(elem[12]);};
elem[13].children[4].children[2].onclick = function(){clear(elem[13]);total(elem[13]);};
elem[14].children[4].children[2].onclick = function(){clear(elem[14]);total(elem[14]);};
elem[15].children[4].children[2].onclick = function(){clear(elem[15]);total(elem[15]);};
elem[16].children[4].children[2].onclick = function(){clear(elem[16]);total(elem[16]);};
elem[17].children[4].children[2].onclick = function(){clear(elem[17]);total(elem[17]);};
elem[18].children[4].children[2].onclick = function(){clear(elem[18]);total(elem[18]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    //setting over
    let score = elem.children[2].innerHTML;
    score = Number.parseInt(score);
    let par = elem.children[1].innerHTML;
    par = Number.parseInt(par);
    if (par<score){
      elem.children[3].innerHTML = score - par;
    }else {
      elem.children[3].innerHTML = score - 1;
    }
    }
  
}
// create a "sub1" function
function sub1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "-1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
    //setting over
    let score = elem.children[2].innerHTML;
    score = Number.parseInt(score);
    let par = elem.children[1].innerHTML;
    par = Number.parseInt(par);
    
    if (score<par) 
      elem.children[3].innerHTML = (-1*par) + score;
    else {
      elem.children[3].innerHTML = score - 1;
    }
    }
  }

function clear (elem) {//resets the elem[xyz]
  elem.children[2].innerHTML = "-";
  elem.children[3].innerHTML = "-";
}
function total (elem) { 
  if(totals[1].children[1].innerHTML == "-") { //if not yet set, game start changes all values to 0
    totals.children[1].innerHTML = 0;
    totals.children[2].innerHTML = 0;
    totals.children[3].innerHTML = 0;
}
  if (elem.children[1].innerHTML == "-" || elem.children[2].innerHTML == "-" || elem.children[3].innerHTML == "-"){
    
  }else{
  //par total
  let x = totals[1].children[1].innerHTML;
    x = Number.parseInt(x);
  let y = elem.children[1].innerHTML;
    y = Number.parseInt(y);
  x = y + x;
  totals[1].children[1].innerHTML = x;
  //score totals
  let a = totals[1].children[2].innerHTML;
    a = Number.parseInt(a);
  let b = elem.children[2].innerHTML;
    b = Number.parseInt(b);
  a = b + a;
  totals[1].children[2].innerHTML = a;
  //over/under totals
  let j = totals[1].children[3].innerHTML;
    j = Number.parseInt(j);
  let h = elem.children[3].innerHTML;
    h = Number.parseInt(h);
  j = h + j;
  totals[1].children[3].innerHTML = j;
    
  }

}
