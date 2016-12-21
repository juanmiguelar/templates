var inicio = document.getElementById("inicioA");
var proyectos = document.getElementById("proyectosA");
var quienes = document.getElementById("quienesA");
var contacto = document.getElementById("contactoA");

var array = [inicio, proyectos, quienes, contacto];

function activar(element){
    desactivar();
    var parent = element.parentNode;
    addClass(parent, "active");
}

function desactivar(){
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        var parent = element.parentNode;
        removeClass(parent, "active");
    }
}

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}


function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}
