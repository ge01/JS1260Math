/****************************************************
*               JavaScript Math Object              *
****************************************************/
function myFunction(){
  document.getElementById("demo").innerHTML = Math.random();
}

function minFunction(){
  document.getElementById("min-function").innerHTML = Math.min(0, 150, 30, 20, -8, -200);
}

function maxFunction(){
  document.getElementById("max-function").innerHTML = Math.max(0, 150, 30, 20, -8, -200);
}

function randFunction(){
  document.getElementById("rand-function").innerHTML = Math.random();
}

function roundFunction(){
  document.getElementById("round-function").innerHTML = Math.round(4.3);
}

function ceilFunction(){
  document.getElementById("ceil-function").innerHTML = Math.ceil(4.4);
}

function floorFunction(){
  document.getElementById("floor-function").innerHTML = Math.floor(4.7);
}

function constFunction() {
  document.getElementById("const-function").innerHTML = Math.E + "<br>" +
    Math.PI + "<br>" +
    Math.SQRT2 + "<br>" +
    Math.SQRT1_2 + "<br>" +
    Math.LN2 + "<br>" +
    Math.LN10 + "<br>" +
    Math.LOG2E + "<br>" +
    Math.LOG10E + "<br>";
}

function mathFunction(){
  var num = -3.5;
  document.getElementById("math-function").innerHTML = (Math.abs(num) * 2);
}
