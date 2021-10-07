function upperCase(){
    var nome = document.getElementById("nome");
    document.getElementById("first").innerHTML = nome.value.toUpperCase();
}

function numberSoma(){
    var number = document.getElementById("number");
    document.getElementById("second").innerHTML = number.value.concat(" Daqui a 10 anos você terá " );
}