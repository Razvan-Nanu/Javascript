function validate() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  function Car_Function(cars) {
      var carbrand = cars.getAttribute("data-car-brand");
      alert("One of " + carbrand + " most famous model is the " + cars.innerHTML);
  }