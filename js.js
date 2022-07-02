function validar() {
  let nombre = document.getElementById("txtNom");
  let telefono = document.getElementById("txtCel");
  let mensaje = "";
  if (nombre.value === "") {
    nombre.style = "border: 1px red solid";
    nombre.focus = true;
    mensaje = "Nombre... ";
  }
  if (telefono.value === "") {
    telefono.style = "border: 1px red solid";
    telefono.focus = true;
    mensaje += "Celular... ";
  }

  if (telefono.value==="" ||nombre.value==="") {
      alert("Los siguientes campos estan vacios: " + mensaje);
  }
}
