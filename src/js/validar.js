const regex=/^\[A-Z]{1}\d{3}[a-z]{3}\D{3}$/;
const reg= /^[A-Z]\d{3}[a-zñ]{3}[^A-Za-z\dñÑ ]{3}$/;
const rege=/^[a-zA-Z]{1}[0-9]{3}[a-z]{3}\D{3}$/;    

function mensaje(){
    var input = document.getElementById("password").value;
    if(rege.test(input)){
        document.querySelector(".alerta").innerHTML = 
        "<div class='col-sm-6 col-md-7'>"+
            "<div class='alert alert-success' id='box1'>"+
                "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>"+
                    "×</button>"+
               "<span class='glyphicon glyphicon-ok'></span> <strong>Contraseña correcta</strong>"+
                "<hr class='message-inner-separator'>"+
                "<p>La contraseña cumple con los requisitos</p>"+
            "</div>"+
        "</div>";
    }else{
        document.querySelector(".alerta").innerHTML = 
        "<div class='col-sm-6 col-md-7'>"+
            "<div class='alert alert-danger' id='box1'>"+
                "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>"+
                    "×</button>"+
               "<span class='glyphicon glyphicon-ok'></span> <strong>Contraseña incorrecta</strong>"+
                "<hr class='message-inner-separator'>"+
                "<p>Ingresa una contraseña valida</p>  "+
            "</div>"+
        "</div>";
    }
}

var enter = document.getElementById("password");
enter.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("enviar").click();
  }
});

formato.addEventListener("click", function () {
    document.querySelector(".alerta").innerHTML = 
        "<div class='col-sm-6 col-md-7'>"+
            "<div class='alert alert-info' id='box1'>"+
                "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>"+
                    "×</button>"+
               "<span class='glyphicon glyphicon-ok'></span> <strong>Formato de contraseña</strong>"+
                "<hr class='message-inner-separator'>"+
                "<p><b>La contraseña debe poseer:</b></br>Primera letra en mayúscula [A-Z]<br>Tres números [0-9]<br>Tres letras en minúsculas<br>Tres caracteres especiales<br>Ejemplo: A123abc!@#</p>"+
            "</div>"+
        "</div>";
});