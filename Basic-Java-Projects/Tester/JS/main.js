alert(document.getElementById("p1").innerHTML);//alert will display p1 text 

function Loop_Function() {
   var Digit = "";
   var X = 1;
   while(X<11) {
       Digit += ("<br>") + X;
       X++;
   }//while function will run if statement is true.
   document.getElementById("Loop").innerHTML=Digit;
}

function Length_Function() {
    var code="code";
    document.getElementById("length").innerHTML=code.length;
}//length function will tell you how many characters the word has


var Car = ["BMW", "Audi", "Ford", "Toyota"];
var Content ="";
var C;
function For_Function() {
    for(C = 0; C < Car.length; C++) {
        Content += Car[C] + ("<br>");
    }
    document.getElementById("Cars").innerHTML=Content;
}//for function will display each of the car brands using length to determine the position


function Constant_Function() {
const Teams ={ name:"Blazers", city:"Portland"};
Teams.name="Warriors";
Teams.city = "Los Angeles";
document.getElementById("constant").innerHTML= 
"My local basketball team is the " + Teams.city + Teams.name;
} // If I tried to change Teams to something else then there would be an error



let artist = {rock:"Queen", rap:"Kanye", country:"Tim",
description: function() {
    return "We love listening to " + artist.rock + "and " +  artist.country;
}
};
document.getElementById("Object").innerHTML=artist.description();
// using return we are able to display the function

var word = "";
var P;
for (P = 0; P < 10; P++) {
    if (P === 3) { break; }
    word += "Player " + P + "<br>";
}
document.getElementById("for").innerHTML=word;
// using a break will stop the loop if it hits those parameters first

var cont = "";
var U;
for(U=0; U<10; U++) {
    if(U==4) {continue;}
cont += "this continues " + U + "<br>";
}
document.getElementById("demo").innerHTML=cont;
// opposite of break, the loop will continue even if the parameters are met. 
