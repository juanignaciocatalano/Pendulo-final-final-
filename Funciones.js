
/*
 * Created by juanchi on 12/5/2016.
 */
g = 9.81

function main() {
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

    function velocidad_bala() {
        var input = document.getElementById('masa_bala'),
            m1 = Number(input.value);
        var input = document.getElementById('masa_bloque'),
            m2 = Number(input.value);
        var input = document.getElementById('altura_bloque1'),
            h = Number(input.value);
        var result = Math.pow(2 * Math.pow((m1 + m2, 2)*g*h / Math.pow(m1, 2), 2), 0.5);
        document.getElementById('resultadoVelBala').value = result;
        alert(result);
    }

    function velocidad_bloque() {
        var input = document.getElementById('masa_bala'),
            m1 = Number(input.value);
        var input = document.getElementById('masa_bloque'),
            m2 = Number(input.value);
        var input = document.getElementById('velocidad_bala1'),
            velocidad_bala = Number(input.value);
        var result = Math.pow((Math.pow((m1 * velocidad_bala), 2) / (m1 + m2)), 0.5);
        document.getElementById('resultadoVelBloque').value = result;
        alert(result);
    }

    function altura_bloque() {
        var input = document.getElementById('masa_bala'),
            m1 = Number(input.value);
        var input = document.getElementById('masa_bloque'),
            m2 = Number(input.value);
        var input = document.getElementById('velocidad_bala1'),
            velocidad_bala = Number(input.value);
        var result = Math.pow(velocidad_bala, 2) * Math.pow(m1, 2) / (g*2*Math.pow(m1+m2, 2));
        document.getElementById('resultadoAltBloque').value = result;
        alert(result);
    }
}

function dibujar(){
    var myCanvas = document.getElementById("canvas");
    var ctx = myCanvas.getContext("2d");
    var centerX = myCanvas.width / 2;
    var anchoTecho = 80;
    var largoCable = 50;
    var largoCubo = 60;

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
    ctx.moveTo(centerX-largoCubo/10,4);
    ctx.lineTo(centerX-largoCubo/10,largoCable+10);

    //Cubo
    ctx.fillRect(centerX-largoCubo/2,largoCable+10,largoCubo,largoCubo*2/3); //(X,y,largo, ancho)


    ctx.stroke()
}