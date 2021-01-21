document.write(typeof 5);
//typeof will output what kind of data variable is in it

document.write("<br>")


document.write(10E5);
//testing float this is 10 to the power of 5

document.write("<br>");

function True_Function() {
    X = 0/0;
    document.getElementById("True").innerHTML=isNaN(X);
}//Function proves that 0/0 is not a number

function False_Function() {
    Y =500;
    document.getElementById("False").innerHTML=isNaN(Y);
}//Function proves 500 is a number

document.write(5E310);//Should appear as infinity

document.write("<br>");

document.write(-2E315);//Should appear as negative infinity

document.write("<br>");

document.write(5>3);//A true boolean statement

document.write("<br>");

document.write(10>12);//A false boolean statement

console.log(5+5);//This will have 10 appear in the console of the browser

document.write("<br>");

document.write("15" + 6);//using coercione should displat 156

console.log(10>15);// false will appear in console

document.write("<br>");
document.write("<br>");

document.write(10==12);//Asking if 10 is equal to 12. Should pop up as false

document.write("<br>");
document.write("<br>");

document.write(8==8);//Asking if 8 is equal to 8. Should pop up as true

document.write("<br>");
document.write("<br>");

A = "Fred";
B = "Fred";
document.write(A===B);
//Asking if the data type and value is the same. Shoud say true

document.write("<br>");
document.write("<br>");

C = "100";
D = 100;
document.write(C===D);
//C and D are not equal because of the different data type values.

E = "25";
F = "twenty five";
document.write(E===F);
//False, they are different values

G = "Bob";
H = 12;
document.write(G===H);
//False, different data type and value.

document.write("<br>");
document.write("<br>");

document.write(100>1 && 5>2);//AND STATEMENT----both statements are true, so it will diplay true
document.write(100>1 && 5>8);//Only one statement is true, it will display false

document.write("<br>");
document.write("<br>");

document.write(100>1 || 5>2);// OR STATEMENT---One statement is true, so it will display true.
document.write(100>1000 || 5>20);//Both are false, so it will appear false. 

document.write("<br>");
document.write("<br>");

function Not_Function() {
    document.getElementById("Not").innerHTML=! (50>6);
}// This NOT Statement will show false

function Double_Not_Function() {
    document.getElementById("Double-Not").innerHTML=! (50>100);
}// Because this is a double negative. The NOT statement will show true when clicked on