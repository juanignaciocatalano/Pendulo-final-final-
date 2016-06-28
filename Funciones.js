
/*
 * Created by juanchi on 12/5/2016.
 */
g = 9.81
var animate ;
var bala = new Image();

var input = document.getElementById('masa_bloque'),
    m2 = Number(input.value);

function main() {                         //corrovoramos la opcion que ingresa el usuario sobre que desea calcular
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
        if (m2 < 0 || h < 0 || m1 < 0) {                                      //corrovora que los datos sean mayores a 0
            alert(" Corrovore que los datos requeridos sean  MAYORES a 0");
        }
        else {
            var result = Math.pow(2 * Math.pow((m1 + m2, 2) * g * h / Math.pow(m1, 2), 2), 0.5);
            document.getElementById('resultadoVelBala').value = result;
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
            document.getElementById('resultadoVelBloque').value = result;
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
            document.getElementById('resultadoAltBloque').value = result;
            alert(result);
        }
    }
}





    

function dibujar() {
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    var x = 0;

    function drawIt() {
        window.requestAnimFrame(drawIt);
        var canvas = document.getElementById('canvas');
        var c = canvas.getContext('2d');
        canvas.width = canvas.width;
        c.moveTo(x, 130)
        c.lineTo(x, 150)
        c.lineTo(x + 30, 140)
        c.lineTo(x, 130)
        c.stroke()
        x += 5;

    }

    window.requestAnimFrame(drawIt);
}
/*

var x =0
function dibujar(){                                        //se inicia el canvas

    var myCanvas = document.getElementById("canvas");
    var ctx = myCanvas.getContext("2d");
    var centerX = myCanvas.width / 2;
    var anchoTecho = 120;
    var largoCable = 90;
    var largoCubo = 100;


    ctx.beginPath();
    ctx.moveTo(centerX-anchoTecho,10);
    ctx.lineTo(centerX+anchoTecho,10);

    

    //Dibujar lineas paralelas inclinadas del techo
    for(var i=0; i< anchoTecho*2;){
        ctx.moveTo(centerX-anchoTecho+i,0);
        i=i+10;
        ctx.lineTo(centerX-anchoTecho+i,10);
        ctx.stroke()
    }

    //Cable Izquierdo
    ctx.moveTo(centerX-largoCubo/4,10);
    ctx.lineTo(centerX-largoCubo/4,largoCable+10);

    //Cable Derecho
    ctx.moveTo(centerX+largoCubo/1100000,10);
    ctx.lineTo(centerX+largoCubo/1000000,largoCable+10);

    //Cubo
    ctx.fillRect(centerX-largoCubo/2,largoCable+10,largoCubo,largoCubo*2/3); //(X,y,largo, ancho)
    ctx.stroke()
}
    */