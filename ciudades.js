document.getElementById('fase1').addEventListener('click', Fase1);
document.getElementById('fase2').addEventListener('click', Fase2);
document.getElementById('fase3').addEventListener('click', Fase3);
document.getElementById('fase4').addEventListener('click', Fase4);

function Fase1(){
    //Inicializo las variables, no pudiendo especificar el tipo en js
    let ciudad1, ciudad2, ciudad3, ciudad4, ciudad5, ciudad6;
    //Introducimos las ciudades en el formulario
    ciudad1=document.getElementById('ciudad1').value;
    ciudad2=document.getElementById('ciudad2').value;
    ciudad3=document.getElementById('ciudad3').value;
    ciudad4=document.getElementById('ciudad4').value;
    ciudad5=document.getElementById('ciudad5').value;
    ciudad6=document.getElementById('ciudad6').value;
    //Los imprimo por la consoloa
    console.log(ciudad1);
    console.log(ciudad2);
    console.log(ciudad3);
    console.log(ciudad4);
    console.log(ciudad5);
    console.log(ciudad6);
}
function Fase2(){
    //Inicializo las variables, no pudiendo especificar el tipo en js
    let ciudad1, ciudad2, ciudad3, ciudad4, ciudad5, ciudad6;
    //Introducimos las ciudades en el formulario
    ciudad1=document.getElementById('ciudad1').value;
    ciudad2=document.getElementById('ciudad2').value;
    ciudad3=document.getElementById('ciudad3').value;
    ciudad4=document.getElementById('ciudad4').value;
    ciudad5=document.getElementById('ciudad5').value;
    ciudad6=document.getElementById('ciudad6').value;
    let arrayCiutats = [ciudad1, ciudad2, ciudad3, ciudad4, ciudad5, ciudad6];
    console.log(arrayCiutats.sort());//Con sort ordenamos el array
}
function Fase3(){
    //Inicializo las variables, no pudiendo especificar el tipo en js
    let ciudad1, ciudad2, ciudad3, ciudad4, ciudad5, ciudad6;
    //Introducimos las ciudades en el formulario
    ciudad1=document.getElementById('ciudad1').value;
    ciudad2=document.getElementById('ciudad2').value;
    ciudad3=document.getElementById('ciudad3').value;
    ciudad4=document.getElementById('ciudad4').value;
    ciudad5=document.getElementById('ciudad5').value;
    ciudad6=document.getElementById('ciudad6').value;
    let arrayCiutats = [ciudad1, ciudad2, ciudad3, ciudad4, ciudad5, ciudad6];
    let arrayCiudadesModificadas = [];//Para ir guardando las arrays modificadas
    let ciudadModificada ="";
    for (ciudad of arrayCiutats){
        ciudadModificada = ciudad.replace(/a/gi, '4'); //La función reemplaza las "a" (da igual si es mayuscula o minuscula) por un 4
        arrayCiudadesModificadas.push(ciudadModificada);//Las agregamos a nuestro en nuestro array
    }
    console.log(arrayCiudadesModificadas.sort());
}
function Fase4(){
    //este ejercicio habría sido más rápido con el método split
    //Codigo literal de la Fase 3
    //Inicializo las variables, no pudiendo especificar el tipo en js
    let ciudad1, ciudad2, ciudad3, ciudad4, ciudad5, ciudad6;
    //Introducimos las ciudades en el formulario
    ciudad1=document.getElementById('ciudad1').value;
    ciudad2=document.getElementById('ciudad2').value;
    ciudad3=document.getElementById('ciudad3').value;
    ciudad4=document.getElementById('ciudad4').value;
    ciudad5=document.getElementById('ciudad5').value;
    ciudad6=document.getElementById('ciudad6').value;
    let arrayCiutats = [ciudad1, ciudad2, ciudad3, ciudad4, ciudad5, ciudad6];
    let arrayCiudad1;
    let arrayLetrasCiudades = [];//Array para ir guardando las ciudades desplegadas por cada letra
    //Será un array de dos dimensiones
    for (ciudad of arrayCiutats){
        arrayCiudad1 = [];
        for (letra of ciudad){
            arrayCiudad1.push(letra);//Vamos poniendo letra a letra en el array
        }
        arrayLetrasCiudades.push(arrayCiudad1);//Guardo las letras de la ciudad correspondiente
    }
    //Debemos recorrer todas las letras de las ciudades
    //Las ciudades las mostraremos en el orden en el que estén en el array
    let letrasInvertidas ;
    for (ciudad of arrayLetrasCiudades){
        letras = "";
        for (let i = ciudad.length-1; i>=0; i--){
            letras += ciudad[i];//Para recoger letra a letra, empezando por el final
        }
        console.log(letras);
    }
}