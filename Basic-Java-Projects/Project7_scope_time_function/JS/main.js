var X=12;
function Global_Function() {
    var End = X+12
    document.getElementById("Global").innerHTML=End;
}//Created a function that would use variable X and add 12 when clicked on

document.write(X *10);//Using var X I am multiplying it by 10

document.write(End +12);//This will not appear because End is a local scope

function Minute_Function() {
    if(new Date().getMinutes() < 30) {
        document.getElementById("Greeting").innerHTML="Complete";}
    }// This function will write complete if it is the first 30min of the hour

function Hour_Function() {
    if (new Date().getHours() > 9) {
        document.getElementById("Hello").innerHTML="Complete";}
    }// If it is after 9am text will write Complete

function Challenge_Function() {
    var Y=100;
    if(Y==100){
        document.getElementById("Challenge").innerHTML="Complete";}
    }// Function will write Complete since Y is equal to 100

    function Vote_Function() {
        Age = document.getElementById("Age").value;
        if (Age >= 18) {
            Vote = "You can Vote";}
        else {
            Vote = "Not old enough to vote";
        }
        document.getElementById("Can_You_Vote").innerHTML= Vote;
        }//Function will tell you if you are old enough to vote or not depending on the value entered


        function Test_Function() {
            Grade = document.getElementById("Grade").value;
            if (Grade >=75) {
                Score = "You passed the test.";}
            else {
                Score = "You did not pass";}
            document.getElementById("Results").innerHTML=Score;
            }//This function will let you know if you passed your test. You must have a score of at least 75.
            
            function Time_Function() {
                var Time = new Date().getHours();
                var Reply;
                if (Time < 12 === Time > 0){
                    Reply = "It is morning";
                }
                else if(Time > 12 === Time < 18) {
                    Reply = "It is the afternoon"
                }
                else {
                    Reply = "It is late at night";
                }
                document.getElementById("Time_of_day").innerHTML=Reply;
            }//A time function that will let you know what time of the day it is.
        
    