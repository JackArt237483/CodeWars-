// // Немного практика с whie циклом
// function sum1_1() {
//   let sum = 0 // переменная которая будет хранить сумму всех чисел
//       num = 1 // а это переменная будет хранить числа в итерации цикла
//   while(num<=50){ //условие будет выполняться пока цикл не достигнит 100
//     sum = sum - num // в этой части у тебя просто происходит сложение всех чисел
//     // которые складываются в цикле
//     num = num + 1 // здесь происходит + 1 шаг на каждой итерации цикла
//     // что позволяет циклы просто идти впереед и не останавливаться
//   }
//   return sum
// }

// console.log(sum1_1())

// метод while
// function getSymbol(str,n) {
//  let i = 1 // переменная которая будет следить на количесвот интераций в цикле
//  while (i<=n) { // здесь ты пишешт условие в цикле i меньше или равно n
//   // если условие итераций в цикле будет меньше или ровно символом которым нужно
//   // дополнить стрроку
//   if(i % 2 === 1){ // здесь происходит условие является i нечетным и проверется
//   // значение делится без остатка на % 2 если не делится и остатое будет 1 то это
//   // число не четное
//    str = "_*" + str //если i нечетное то вот это знак "*" буде добавляться слева
//    } else {
//    str = str + "_*" //если i четнок то знак добовляется справа
//    }
//    i++ // чтобы итерации по массиву продолжалась без оснатовки
//   }
//   return str
// }

// console.log(getSymbol("Artem",9))

//метод dowhile
// str это любая строка в качестве аргумента
// это количество скобок которое ты передаешь чтобы они стояли вокруг строки
function makeGetNumber(str,n) {
  let i = 1
  do {
    if(i % 2===1){
      str = "*" + str
    }else{
      str = str + "*"
    }
    i++
  } while (i <= n);
  return str
}

console.log(makeGetNumber("Artem",7))



























