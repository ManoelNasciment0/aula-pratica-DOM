function tabuada() {
    var text = "";
    if (navigator.cookieEnabled == true) {
      text = ["9x1 = 9", " 9x2 = 18", " 9x3 = 27", " 9x4 = 36 ", " 9x5 = 45",
    " 9x6 = 54", " 9x7 = 63 ", "9x8 = 72 ", "9x9 = 81 ", "9x10 = 90"];
    } else {
      text = "Não tem tabuada.";
    }
    document.getElementById("first").innerHTML = text;
  }