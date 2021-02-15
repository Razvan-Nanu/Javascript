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

function Test_Function() {
    var a = document.getElementsByClassName("Test");
    a[1].innerHTML= "I have changed.";
}

var B = document.getElementById("box");
var line = B.getContext("2d");
line.moveTo(50,0);
line.lineTo(200,100);
line.stroke();



var G = document.getElementById("grad-box").innerHTML;
var gtx = G.getContext("2d");
var grd = gtx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

gtx.fillStyle = grd;
gtx.fillRect(20, 20, 150, 100);