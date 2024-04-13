// Arreglos or arrays
// Un arreglo es una colección de elementos que pueden ser de cualquier tipo, por ejemplo, números, strings, booleanos, objetos, etc.
// En JavaScript, los arreglos son objetos, lo que significa que tienen propiedades y métodos que podemos utilizar.
// Crear un arreglo
// Para crear un arreglo en JavaScript, se utiliza la siguiente sintaxis:
const arreglo = [];

// Ejemplo
const numeros = [1, 2, 3, 4, 5];

// En el ejemplo anterior, se creó un arreglo llamado numeros que contiene cinco elementos de tipo número.


// Acceder a un elemento
console.log(numeros[2]) // show 3

// Modificar un elemento
numeros[2] = 10;
console.log(numeros[2]); // show 10

// Propiedad length
// La propiedad length de un arreglo nos permite conocer la cantidad de elementos que contiene.
console.log(numeros.length); // show 5

// Métodos
// Los arreglos en JavaScript tienen una serie de métodos que podemos utilizar para realizar diferentes operaciones.
const frutas = ['manzana', 'pera', 'uva', 'fresa'];
// Algunos de los métodos más comunes son:
// push: Agrega un elemento al final del arreglo.
frutas.push('sandía');
console.log(frutas); // ['manzana', 'pera', 'uva', 'fresa', 'sandía']
// pop: Elimina el último elemento del arreglo.
frutas.pop();
console.log(frutas); // ['manzana', 'pera', 'uva', 'fresa']

// shift: Elimina el primer elemento del arreglo.
frutas.shift();
console.log(frutas); // ['pera', 'uva', 'fresa']

// unshift: Agrega un elemento al principio del arreglo.
frutas.unshift('naranja');
console.log(frutas); // ['naranja', 'pera', 'uva', 'fresa']

// slice: Devuelve una copia de una parte del arreglo.
const frutas2 = frutas.slice(1, 3);
console.log(frutas2); // ['pera', 'uva']

// splice: Agrega o elimina elementos de un arreglo.
frutas.splice(1, 2, 'kiwi', 'mango');
console.log(frutas); // ['naranja', 'kiwi', 'mango', 'fresa']

// indexOf: Devuelve el índice de la primera ocurrencia de un elemento en el arreglo.
console.log(frutas.indexOf('mango')); // 2

// join: Convierte los elementos de un arreglo en una cadena de texto.
console.log(frutas.join(', ')); // 'naranja, kiwi, mango, fresa'

// reverse: Invierte el orden de los elementos del arreglo.
console.log(frutas.reverse()); // ['fresa', 'mango', 'kiwi', 'naranja']

// sort: Ordena los elementos del arreglo.
console.log(frutas.sort()); // ['fresa', 'kiwi', 'mango', 'naranja']

// filter: Crea un nuevo arreglo con los elementos que cumplan una condición.
const numeros2 = [1, 2, 3, 4, 5];
const numerosPares = numeros2.filter(numero => numero % 2 === 0);
console.log(numerosPares); // [2, 4]

// map: Crea un nuevo arreglo con los resultados de una función aplicada a cada elemento del arreglo.
const numerosPorDos = numeros2.map(numero => numero * 2);
console.log(numerosPorDos); // [2, 4, 6, 8, 10]

// forEach: Ejecuta una función para cada elemento del arreglo.
numeros2.forEach(numero => {
    console.log(numero);
});

// find: Devuelve el primer elemento que cumpla una condición.
const numeroEncontrado = numeros2.find(numero => numero > 3);
console.log(numeroEncontrado); // 4

// findIndex: Devuelve el índice del primer elemento que cumpla una condición.
const indiceNumero = numeros2.findIndex(numero => numero > 3);
console.log(indiceNumero); // 3

// some: Devuelve true si al menos un elemento cumple una condición.
const hayNumerosNegativos = numeros2.some(numero => numero < 0);
console.log(hayNumerosNegativos); // false

// every: Devuelve true si todos los elementos cumplen una condición.
const sonNumerosPositivos = numeros2.every(numero => numero > 0);
console.log(sonNumerosPositivos); // true

// reduce: Aplica una función a cada elemento del arreglo para reducirlo a un solo valor.
const suma = numeros2.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma); // 15



