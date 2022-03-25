const arrayFahr = [0, 32, 45, 50, 75, 80, 99, 120];  /* Array de Temps em Fahrenheit */

const arrayCels = arrayFahr.map((numero) => Math.round((numero - 32) * 5 / 9));
console.log(arrayCels);
console.log(arrayFahr);
