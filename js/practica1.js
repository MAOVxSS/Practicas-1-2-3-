
function comparar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = document.getElementById("resultado");
    
    if (num1 > num2) {
      resultado.innerHTML = num1 + " es mayor que " + num2;
      resultado.style.color = "red";
    } else if (num2 > num1) {
      resultado.innerHTML = num2 + " es mayor que " + num1;
      resultado.style.color = "red";
    } else {
      resultado.innerHTML = "Los dos números son iguales";
      resultado.style.color = "red";
    }
  }

  function limpiar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    resultado.innerHTML = ""

}




