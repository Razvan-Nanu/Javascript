function Concat_Function() {
    var text_1 = "Testing ";
    var text_2 = "out this ";
    var text_3 = "function.";
    var together = text_1.concat(text_2, text_3);
    document.getElementById("Combine").innerHTML= together;
}// this function will use concat to string them together

function Slice_Function() {
    var random = "asdfDisplayondnsm";
    var correct = random.slice(4,11);
    document.getElementById("slice").innerHTML=correct;
} // this function will use slice to only show the word Display

function Upper_Function() {
    var X = " This should all be upper case";
    var Y = X.toUpperCase();
    document.getElementById("upper").innerHTML=Y;
}// this function will cause all the words in the string to appear in uppercase

function Search_Function() {
    var W = "We will find the position of me";
    var V = W.search("me");
    document.getElementById("search").innerHTML= V;
}// this function will tell you the position of the word you selected

function To_String_Function() {
    var number = 200;
    document.getElementById("to_string").innerHTML = number.toString();
}// Function will convert number to string

function Precision_Function() {
    var prec = 23784398349832;
    document.getElementById("precision").innerHTML= prec.toPrecision(5);
}// function will shorten variable to 5 numbers

function Fixed_Function() {
    var decimal = 6.34546;
    document.getElementById("fixed").innerHTML= decimal.toFixed(3);
}//toFixed will shorten the number down to the last 3 decimals

function Value_Function() {
    var A = "Primitive Value";
    document.getElementById("value").innerHTML= A.valueOf();
}// will return the primitive value of the string object