function comparar() {
    let marca = document.getElementById("marca").value.toLowerCase();
    let modelo = document.getElementById("modelo").value.toLowerCase();

    let resultado = document.getElementById("resultado");
    let resultado2 = document.getElementById("resultado2");

    var desc1 = .5;
    var desc2 = .10;
    var aux;
    var total;


    if (marca === "ford" && modelo === "fiesta") {
        resultado.innerHTML = "Descuento del 5%"
        resultado.style.color = "orange";
        var aux = (150000 * desc1);
        var total = 150000 - aux;
        resultado2.innerHTML = total;
        resultado2.style.color = "red";

    } else if (marca === "ford" && modelo === "focus") {
        resultado.innerHTML = "Descuento del 10%"
        resultado.style.color = "orange";
        var aux = (110000 * desc2);
        var total = 110000 - aux;
        resultado2.innerHTML = total;
        resultado2.style.color = "red";
    } else {
        resultado.innerHTML = "No hay descuento"
        resultado.style.color = "orange";
    }
}

function limpiar() {
    document.getElementById("marca").value = "";
    document.getElementById("modelo").value = "";

    resultado.innerHTML = ""
    resultado2.innerHTML = "";
}
