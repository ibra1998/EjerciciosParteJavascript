//Fase1();
//
var billete5, billete10, billete20, billete50, billete100, billete200, billete500, totalPrice ;
    billete5 = 5;
    billete10 = 10;
    billete20 = 20;
    billete50 = 50;
    billete100 = 100;
    billete200 = 200;
    billete500 = 500;
    totalPrice = 0;//This stores the total amount we must pay for our order
    var menu = [];
    var menuPrices = [];
    var menulength = 5;//this is the length of my arrays
    var orderedDishes;

//
Fase2();
Fase3();
function Fase1(){
    //I create all notes that exists and I give them their values. The variables are global so the can be reused in other parts of the code
    var billete5, billete10, billete20, billete50, billete100, billete200, billete500, totalPrice ;
    billete5 = 5;
    billete10 = 10;
    billete20 = 20;
    billete50 = 50;
    billete100 = 100;
    billete200 = 200;
    billete500 = 500;
    totalPrice = 0;//This stores the total amount we must pay for our order
    var menu = [];
    var menuPrices = [];
    var menulength = 5;//this is the length of my arrays
}
function Fase2(){
    for (let i = 0; i< menulength; i++){
        menu.push((prompt("Introduzca el plato que quiera al menú: ", "Pollo")).toLocaleLowerCase());
        menuPrices.push(parseInt((prompt("Introduzca el precio: ", 10))));
    }
    let menuText = ""; //A text to resume our menu
    for (let i = 0; i< menulength; i++){
        menuText += menu[i] + " : " + menuPrices[i] + " €\n";
    }
    orderedDishes = [];
    let seguirPidiendo; //to store if the user wants to order more
    do{
        seguirPidiendo = false;
        alert(menuText);
        orderedDishes.push(prompt("Qué quiere pedir?"));//We add the dish to our list
        if (prompt("Quiere seguir pidiendo?\n1. si\n 2. no ")== 1){//We introdce 1 or two depending if we want to continue ordering
            seguirPidiendo = true;//If the user wants to continue ordering, we should keep looping
        }
    }while(seguirPidiendo)//The loop executes at least once, and ends when the user doesn't want more things
}
function Fase3(){
    //We should check every dish if it exists on the menu
    for (dish of orderedDishes){
        if (menu.indexOf(dish.toLowerCase()) != -1){//We find if the element exists
            totalPrice += menuPrices[menu.indexOf(dish.toLowerCase())];
        }else{
            alert("El plato " + dish + " no existe en nuestro restaurante. ");
        }
    }
    //I want to show how many bancknotes of each value we should use
    let texto = " Para pagar " + totalPrice+  " euros <br>";
    texto += parseInt(totalPrice/billete500)+ " billetes de 500 €<br>";
    texto += parseInt((totalPrice%billete500)/billete200)+ " billetes de 200 €<br>";
    texto += parseInt(((totalPrice%billete500)%billete200)/billete100) + " billetes de 100 €<br>";
    texto += parseInt((totalPrice%billete100)/billete50) + " billetes de 50 €<br>";
    texto += parseInt((totalPrice%billete50)/billete20 )+ " billetes de 20 €<br>";
    texto += parseInt(((totalPrice%billete50)%billete20)/billete10) + " billetes de 10 €<br>";
    texto += parseInt((totalPrice%billete10)/billete5) + " billetes de 5 €<br>";
    document.getElementById('demo').innerHTML += texto;
}