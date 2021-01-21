function My_Dictionary() {
    var Car = {
        Color: "Red",
        Brand: "BMW",
        Type: "Sedan",
    };
    delete Car.Brand;
    document.getElementById("Dictionary").innerHTML=Car.Brand;
}//Created a function to call the Car and brand when clicked on
//we wrote delete Car.Brand; so the value is undefined
