// mustra dos pares de numeros dentro de un array si ests no superan el
// limite. Si lo superan entonces salta el numero y continua con el siguente

console.log("<--------------pairOfSumToTarget---------------->");

function pairOfSumToTarget(numbers, target) {
  var suma = 0;

  numbers.forEach((element, index) => {
    index_anterior = index - 1;
    if (index_anterior >= 0) {
      suma = numbers[index_anterior] + element;
    }

    if (suma == target) {
      console.log(numbers[index_anterior] + " , " + element);
    }
  });
}
pairOfSumToTarget([1, 4, 5, 0, 6, 3, 2], 5);

console.log("<--------------pairOfSumToTarget---------------->");
