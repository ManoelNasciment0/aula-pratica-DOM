function entrarPagina() {
    var text = "";
    if (navigator.cookieEnabled == true) {
      text = ["Recife", " Salvador", " João Pessoa", " Natal", " Maceió"];
    } else {
      text = "Não tem capital.";
    }
    document.getElementById("first").innerHTML = text;
  }