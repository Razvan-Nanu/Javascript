function Age_Function() {
    var Age, Can_Watch;
    Age = document.getElementById("Age").value;
    Can_Watch = (Age > 17) ? "You are old enough to watch the movie":"You are too young to watch the movie";
    document.getElementById("Watch").innerHTML=Can_Watch;

    
}// This Function will determine whether or not the person is old enough to watch the movie based on the age value.

function Vote_Function() {
    var Vote, Can_Vote;
    Vote = document.getElementById("Vote").value;
    Can_Vote =(Vote>=18) ? "You are able to Register": "Sorry you are not old enought to Vote";
    document.getElementById("Register").innerHTML=Can_Vote;
}//Function will let the person know if they can vote. 



function Vehicle(Make,Model,Year,Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge", "Viper",2021,"Red");
var Emily=new Vehicle("Jeep","Trailhawk", 2019, "White and Black");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");
function My_Function() {
    document.getElementById("Car").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + " colored " + Erik.Vehicle_Make + Erik.Vehicle_Model + " made in " + Erik.Vehicle_Year;
}//Function will recall all variables and their objects.


// Help-----------I wanted to make a function of my own but it wont work the same as above. 
function Description(Age,Height,Gender) {
    this.Description_Age=Age;
    this.Description_Height=Height;
    this.Description_Gender=Gender;
}
   
var Max=new Description(19,"five foot",Male);

function Customer_Function() {
    document.getElementById("New_Cust").innerHTML=
    Max.Description_Height;
}//Above function does not work when I click the button. Nothing appears.

function Multiply_Function() {
    document.getElementById("Nested_Function").innerHTML=Multiply();
    function Multiply() {
        var beg_point = 10;
        function TimesTwo() {
            beg_point +=5;
        }
            TimesTwo();
            TimesTwo();
        return beg_point;
    }
}//Nested function that will perform TimesTwo twice which will add 5 to the var twice.
