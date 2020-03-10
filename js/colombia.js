$("#selh3").click(function(event) {
  console.log("has dado click");
  $("#contenedor").load("https://www.amazon.com/");
});

var part = "";
$.getJSON("partidos.json", function(datos) {
  $("#contenido").html("");
  $.each(datos["partidos"], function(idx, partido) {
    $("#contenido").append(
      "<tr> " +
        "<td>" +
        partido["fecha"] +
        "</td> <td><" +
        partido[equipo1] +
        "</td><td></td>" +
        partido.equipo2 +
        "</td>" +
        "</tr>"
    );
  });
});
