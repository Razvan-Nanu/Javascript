function My_Function() {
    var X = 5*5;
    document.getElementById("Math").innerHTML = X;
}//This function will perform the multiplication and show the answer when the HTML document is clicked on

function Sub_Function() {
    var Y = 92 - 69;
    document.getElementById("Sub").innerHTML = Y;
}//This function will perform the subtraction and show the answer when the HTML document is clicked on

function Div_Function() {
    var Z = 90 / 11;
    document.getElementById("Div").innerHTML= Z;
}//This function will perform the subtraction and show the answer when the HTML document is clicked on

function Answer_Function() {
    var W = (25*8)-7;
    document.getElementById("Answer").innerHTML=W;
}//This function will perform the math problem and show the answer when the HTML document is clicked on

function Modulus_Function() {
    var V = 38 %4;
    document.getElementById("Modulus").innerHTML=V;
}//This function will perform the divison and show the remainder when the HTML document is clicked on

function Negative_Function() {
    N = 5;
    document.getElementById("Negative").innerHTML= -N;
}// Negative 5 should appear when clicked on

var increment = 8;
increment++;
document.write(increment);//the number 9 will appear since 1 is being added to 8


document.write("<br>");// Line break

var decrement = 10;
decrement--;
document.write(decrement);//subtracting 1 from 10. 9 will appear

document.write("<br>");

document.write(Math.random() *200);//A random number will appear between 0 and 200

function Power_Function() {
    P = Math.pow(9,4);
    document.getElementById("Power").innerHTML=P;
}//This Function will perfrom 9 to the power of 4 when clicked on