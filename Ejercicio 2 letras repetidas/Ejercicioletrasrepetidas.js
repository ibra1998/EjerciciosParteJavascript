
document.getElementById('fase1').addEventListener('click', Fase1);
document.getElementById('fase2').addEventListener('click', Fase2);
document.getElementById('fase3').addEventListener('click', Fase3);
document.getElementById('fase4').addEventListener('click', Fase4);

function Fase1(){
    let nombre = "Brahim";
    letrasNombre = nombre.split("");
    for (letra of letrasNombre){
        console.log(letra);
    }
}
function Fase2(){
    let nombre = "Brahim";
    nombre = nombre.toLocaleLowerCase();
    letrasNombre = nombre.split("");
    let numeroEncontrado;
    for (letra of letrasNombre){
        if (letra == "a" || letra == "e" || letra == "i" || letra == "o" ||
        letra == "u" ){
            console.log(letra + ": Vocal");
        }else if (letra<=9 || letra >=0){
            console.log(letra + ": Un numero")
            numeroEncontrado = true;
        }else {
            console.log(letra + ": Consonant");
        }
    }
    if (numeroEncontrado){
        console.log("Los nombres de las personas no contienen números!");
    }
}
function Fase3(){
    let mapLetras = {};
    let nombre = "Brahim";
    let count;
    for (letra of nombre){
        count = 0;//Empezamos el contador desde 0 por cada letra del nombre
        for (otraLetra of nombre){
            if (letra.toLocaleLowerCase() == otraLetra.toLocaleLowerCase()){
                count ++;//cada vez que dos letras coincidan, suma 1
            }
        }
        mapLetras[letra.toLocaleLowerCase()] = count; //Ponemos en el objeto el elemento con su letra (key) y su contador (value)
        //Si hubiera más de una letra repetida, solo guarda uno de los dos objetos, porque la última vez que apareció la letra sustituye la primera vez que aparecio
    }
    console.log(mapLetras);
}
function Fase4(){
    let letrasApellido = "El Habzi".split("");//hyacemos un array con las letras del apellido
    let nombre = "Brahim";
    letrasNombre = nombre.split("");//Lo mimso con el nombre
    let letrasNombreCompleto = letrasNombre.concat([" ", ...letrasApellido]); //Concatenamos el nombre con un espacio y desplegando el array de apellido en un unico array
    console.log(letrasNombreCompleto);//Imprimimos el resultado
}