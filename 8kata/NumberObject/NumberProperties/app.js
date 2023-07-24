//Задача для проверки значений Number и его свойств

function giveMeRightNumber(n){// у тебя есть функция с параметром n это любой число
  //которое ты можешь задать вот так вот пока
  if(n === Number.MAX_VALUE) { //ты сравниваешь Number со всеми его свойствами
    return "Input number is Number.MAX_VALUE" //возращает максимальное число
  } else if (n === Number.MIN_VALUE){
    return "Input number is Number.MAX_VALUE" //возращает минимальнок число
  } else if (n === Number.NaN){ //возращает не число
    return "Input number is Number.NaN"
  } else if (n === Number.NEGATIVE_INFINITY){ //возращает -бескоенечность число
    return "Input number is Number.NEGATIVE_INFINITY"
  } else if (n === Number.POSITIVE_INFINITY){
    return "Input number is Number.POSITIVE_INFINITY"//возращает +бескоенечность число
  } else {
    return "N is the" + " " + n //возращает рандомное число если он не чем не явлеется
  }
}

console.log(giveMeRightNumber(1/0))
console.log(giveMeRightNumber(-1/0))
console.log(giveMeRightNumber(100))
console.log(giveMeRightNumber(1/0))
// в этом месте ты просто передаешь любое значение число и оно после проверки
//возращеет какое либо число


