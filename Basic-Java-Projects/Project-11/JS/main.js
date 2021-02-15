function Colors_Function() {
    Color = document.getElementById("Color").value;
    var Color_Output;
    var Color_text = " is a good choice for a car color";
    switch(Color) {
        case "Red":
        Color_Output = "Red" + Color_text;
        break;
        case "Blue":
        Color_Output = "Blue" + Color_text;
        break;
        case "Grey":
            Color_Output = "Grey" + Color_text;
            break;
        case "Black":
            Color_Output = "Black" + Color_text;
            break;
        case "White":
            Color_Output = "White" + Color_text;
            break;
        default:
            Color_Output = "Please type in one of the colors above";
            break;
    }
    document.getElementById("car-color").innerHTML = Color_Output;
}