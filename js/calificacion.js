
function comparar() {
    let calif1 = parseInt(document.getElementById("calif1").value);
    let calif2 = parseInt(document.getElementById("calif2").value);
    let calif3 = parseInt(document.getElementById("calif3").value);
    let resultadoMedia = document.getElementById("resultadoMedia");
    let resultadoEstatus = document.getElementById("resultadoEstatus");
    var promedio;

    promedio = (calif1+calif2+calif3) / 3;
    resultadoMedia.innerHTML = promedio;
    resultadoMedia.style.color = "orange";

    if(promedio >= 7){
        resultadoEstatus.innerHTML = "Aprobado";
        resultadoEstatus.style.color = "green";
    }else{
        resultadoEstatus.innerHTML = "Reprobado";
        resultadoEstatus.style.color = "red";
    }

  }

  function limpiar() {
    document.getElementById("calif1").value = "";
    document.getElementById("calif2").value = "";
    document.getElementById("calif3").value = "";

    resultadoMedia.innerHTML = ""
    resultadoEstatus.innerHTML = "";
}
