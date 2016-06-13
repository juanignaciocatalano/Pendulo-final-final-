
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