
// // SPREAD

// /*
// * SPREAD nos permite esparcir elementos de un iterable (array) como argumentos de una 
// * función cuando la ejecutamos.
// *
// */

// const describePersona = (nombre, edad, ciudad, hobby) => {

//     console.log(nombre);
//     console.log(edad);
//     console.log(ciudad);
//     console.log(hobby);

// }

// let persona = ['David', 36, 'Valencia', 'Padel'];


// // //SIN SPREAD
// // describePersona(persona[0],persona[1],persona[2],persona[3]);

// // CON SPREAD
// describePersona(...persona);

// ////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////////////


// // REST

// /**
//  * 
//  * rest nos agrupa en un array todos los argumentos que recibe la función, reciba los que reciba. 
//  * Esto es muy útil para cuando se recibe mas o menos argumentos diferentes
//  * 
//  */

// const saludaAlumno = (...argumentos) => {
//     argumentos.map(item => console.log(item));
// };


// saludaAlumno("Felipe", 35, "Valencia", "cine", "guitarra");
// saludaAlumno("Fernando", 38, "Valencia", "entrenar", "escribir", "leer");
// saludaAlumno("Mario", 31, "Valencia", "patinar");




////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////


// KATA  -> Funcion cocinar una pizza quieres y tu le pasas los ingredientes

// const cocinarPizza = (...ingredientes) => {
//     ingredientes.map(ingr => console.log(ingr));
// }

// cocinarPizza("Tomate", "Orégano", "Pepperoni", "Mozzarella");
// cocinarPizza("Tomate", "Orégano", "Piña", "Anchoas", "Albahaca", "Atun");
// cocinarPizza("Tomate", "Orégano", "Queso", "Queso azul", "Camembert", "Queso Feta");


////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////

// EXTENSION OBJETOS LITERALES

// const Pokemon = (nombre, tipo, ataque) => (
//     {
//         nombre,
//         tipo,
//         ataque
//     }
// );
// Pokemon("Pikachu", "Electrico", "Rayo");


////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////


// DESESTRUCTURACIÓN

// // Desestructuramos de un Array...

// let series = ["One Piece", "Juego de Tronos", "Salvados por la campana", "Los 100", "Paquita Salas", "Berserk"];
// let [eterna,aburrido,clasica,pesada] = series;

// // DEsestructuramos de un Objeto...

// let juegosDeMesa = {

//     ricos : "Monopoly",
//     batallas : "Catan",
//     asesinos : "GloomHaven"
// };

// let {ricos : primero, batallas : segundo,asesinos : tercera} = juegos;



////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////



// FOR OF....

// let bebidas = ["coca-cola","Monster","tequila","jaggermeister","agua con gas","casalla","mistela"];

// for (let chupito of bebidas) {
//     console.log(chupito);
// };


// EJERCICIO // Haz una función que sume números independientemente de la cantidad que se le pase como argumentos 
//FOR OF Y REST


// const Sumar = (...numeros) => {
//     let suma = 0;
//     for (let numero of numeros) {
//         suma += numero;
//     }
//     console.log(suma);
// };
// Sumar (2,3,6,7,8,2,-5);
// Sumar(1,1,1,1,1,1,1,4,5,6,7,8,5,5,6,7,8);





////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////




//FOR IN




