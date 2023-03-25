function generarCalendario() {
    var mes = parseInt(document.getElementById("mes").value);
    var anio = parseInt(document.getElementById("anio").value);
  
     //Establecemes los dias y meses con las funciones getday
    var diasEnMes = new Date(anio, mes, 0).getDate();
    var primerDia = new Date(anio, mes - 1, 1).getDay(); //para inciar el domingo
  
    var diasSemana = ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S'];
  
    var tabla = '<table>'; //Encabezado por medio de un ciclo
    tabla += '<tr>';
    for (var i = 0; i < diasSemana.length; i++) {
      tabla += '<th>' + diasSemana[i] + '</th>';
    }
    tabla += '</tr>';

    var dia = 1; //Se inicializa la varaible con el dia 1

    //Iterar para la tabla, se van ingresando los dia
    for (var fila = 0; fila < 6; fila++) {
      tabla += '<tr>';
      for (var col = 0; col < diasSemana.length; col++) {
        if (fila === 0 && col < primerDia) {
          tabla += '<td></td>';
        } else if (dia > diasEnMes) {
          tabla += '<td></td>';
        } else {
          tabla += '<td>' + dia + '</td>';
          dia++;
        }
      }
      tabla += '</tr>';
      if (dia > diasEnMes) {
        break;
      }
    }
  
    tabla += '</table>';
    //Se inserta al html
    document.getElementById("calendario").innerHTML = tabla;
  }

  //Funcion para limpiar los campos de texto
  function limpiar() {
    document.getElementById("mes").value = "";
    document.getElementById("anio").value = "";
}