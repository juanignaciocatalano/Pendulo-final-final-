
/*
 * Created by juanchi on 12/5/2016.
 */
g = 9.81
var animate ;
var bala = new Image();

var input = document.getElementById('masa_bloque'),
    m2 = Number(input.value);

function main() {                         //corroboramos la opcion que ingresa el usuario sobre que desea calcular
    var input = document.getElementById('options'),
        option = input.value;

    if (option == "velocidad_bloque") {
        velocidad_bloque();
    }
    if (option == "velocidad_bala"){
        
        velocidad_bala();
    }

    if (option == "altura_bloque"){
        altura_bloque();
    }

    function velocidad_bala() {                             //esta funcion calcula la velocidad de la bala
        var input = document.getElementById('masa_bala'),
            m1 = Number(input.value);
        var input = document.getElementById('altura_bloque1'),
            h = Number(input.value);
        var input = document.getElementById('masa_bloque'),
            m2 = Number(input.value);
        if (m2 < 0 || h < 0 || m1 < 0) {                                      //corrobora que los datos sean mayores a 0
            alert(" Corrobore que los datos requeridos sean  MAYORES a 0");
        }
        else {
            var result = Math.pow(2 * Math.pow((m1 + m2, 2) * g * h / Math.pow(m1, 2), 2), 0.5);
            document.getElementById('resultadoVelBala').value = result.toFixed(2);
            alert(result);
        }
    }
    function velocidad_bloque() {                        //esta funcion calcula la velocidad del bloque 
        var input = document.getElementById('masa_bala'),
            m1 = Number(input.value);
        var input = document.getElementById('velocidad_bala1'),
            velocidad_bala = Number(input.value);
        var input = document.getElementById('masa_bloque'),
            m2 = Number(input.value);
        if (m2 < 0 || m1 < 0 || velocidad_bala <0  ) {
            alert(" Corrovore que los datos requeridos sean  MAYORES a 0");
        }
        else {
            var result = Math.pow((Math.pow((m1 * velocidad_bala), 2) / (m1 + m2)), 0.5);
            document.getElementById('resultadoVelBloque').value = result.toFixed(2);
            alert(result);
        }
    }
    function altura_bloque() {                              //esta funcion calcula la altura del bloque
        var input = document.getElementById('masa_bala'),
            m1 = Number(input.value);
        var input = document.getElementById('velocidad_bala1'),
            velocidad_bala = Number(input.value);
        var input = document.getElementById('masa_bloque'),
            m2 = Number(input.value);
        if (m2 < 0 || m1 < 0 || velocidad_bala <0) {
            alert(" Corrovore que los datos requeridos sean  MAYORES a 0");
        }
        else {
            var result = Math.pow(velocidad_bala, 2) * Math.pow(m1, 2) / (g * 2 * Math.pow(m1 + m2, 2));
            document.getElementById('resultadoAltBloque').value = result.toFixed(3);
            alert(result);
        }
    }
}
function dibujar() {  // se arranca con el canvas 

    var x = 0; // se inicias las variables a utilizar
    var y = 0;
    var T = 0;
    var a = 0;
    var b = 0;
    window.requestAnimFrame = (function () {  // funcion que se encarga de recargar canvas 
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
        function drawIt() {                                 // si unicia el dibujo 
            window.requestAnimFrame(drawIt);
            var canvas = document.getElementById('canvas');
            var c = canvas.getContext('2d');
            canvas.width = canvas.width;

             if (T<350) {                                 //condicones  para la animacion conjunta 
                 x+=10
             }
            if (T>250) {
                y=-10
            }
            //bala
            c.moveTo(x, y +130)
            c.lineTo(x,y+ 150)
            c.lineTo(x + 30, y+140)
            c.lineTo(x,y+ 130)
            c.stroke()

            //bloque
            c.fillRect(a + 250, b + 100, 150, 80, 50)
            c.stroke()
            if (T > 260 && T<600) {
                a += 1;
                b += -1;
            }

            //cable1
            c.moveTo(300, 0);
            c.lineTo(a + 300, b + 100);
            c.stroke()

            //cable2
            c.moveTo(350, 0);
            c.lineTo(a + 350, b + 100);
            c.stroke()

            // escala x
            c.moveTo(0, 240);
            c.lineTo(480,240);
            c.moveTo(a+250, 235);
            c.lineTo(a + 250,245);
            c.stroke()

            // escala y
            c.moveTo(480,0);
            c.lineTo(480,240);
            c.moveTo(475,b + 100);
            c.lineTo(485,b + 100);
            c.stroke()

            T += 10;                                         // parametro comun de referencia 
    }
           window.requestAnimFrame(drawIt);

}
function selectorCalculo(valor){
    if(valor=="velocidad_bala") {
        document.getElementById("velocidad_bala1").disabled = true;
    }
    else{
        document.getElementById("velocidad_bala1").disabled = false;
    }

    if(valor=="altura_bloque") {
        document.getElementById("altura_bloque1").disabled = true;
    }
    else{
        document.getElementById("altura_bloque1").disabled = false;
    }

    if(valor=="velocidad_bloque") {
        document.getElementById("altura_bloque1").disabled = true;
    }
    else{
        document.getElementById("altura_bloque1").disabled = false;
    }


}






