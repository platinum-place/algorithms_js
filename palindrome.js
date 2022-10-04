//problema

//https://www.hackerrank.com/challenges/palindrome-index/problem

//Dada una cadena de letras minúsculas en el rango ascii[az],
//determine el índice de un carácter que se puede eliminar para convertir
//la cadena en un palíndromo . Puede haber más de una solución, pero
//cualquiera servirá. Si la palabra ya es un palíndromo o no tiene solución,
//devuelve -1 . De lo contrario, devuelve el índice de un carácter para eliminar.

console.log("<--------------palindrome---------------->");

function palindrome(s) {
  var array = s.replace(/[\W_]/g, "").toLowerCase().split("");

  var r = [];
  var ultima_posicion = array.length - 1;
  array.forEach((element, index) => {
    if (array[index] != array[ultima_posicion]) {
      if (array[index + 1] == array[ultima_posicion]) {
        r.push(index);
      }
      if (array[index] == array[ultima_posicion - 1]) {
        r.push(ultima_posicion);
      }
    }
    ultima_posicion--;
  });

  if (r.length > 0) {
    return r[0];
  } else {
    return -1;
  }
}
var r = palindrome("aaab");
console.log(r);
var r = palindrome("baa");
console.log(r);
var r = palindrome("áaa");
console.log(r);

console.log("<--------------palindrome---------------->");
