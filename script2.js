function soma(){
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var resultado = document.getElementById("me");
    
    if(resultado.textContent < 2 || 10){
        resultado.textContent = "o resultado é: " + (number1 + number2);
    }else {
        resultado.innerText = "o resultado é";
    }
  }