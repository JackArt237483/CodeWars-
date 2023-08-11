// ПОЛУЧАЕТСЯ ЗАДАЧА НА УДАЛЕНИЯ И ДОБАВЛЕНИЯ РАЗНЫХЧИСКЛ В 2D МАССИВЕ


const arr = [[1,3,5],[3,2,5],[5,6,7]]
const n = "right"
const s = 1

function infiniteLoop(arr,d,n){

  if (d === "left") {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < n; j++) {
          arr[i].push(arr[i].shift());
        }
      }
    } else if (d === "right") {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < n; j++) {
          arr[i].unshift(arr[i].pop());
        }
      }
    }

    return arr;
  }

console.log(infiniteLoop(arr,n,s))

/*
1)У тебя есть функция с тремя аргументами
___первый это сам массив arr
___воторой это направление по которому будет
меняться массив n
___и втрой это количество шагов по которому
будем проходиться s
2)if (d === "left") { ... } else if (d === "right") { ... }
ЗДЕСЬ ПРОИСХОДИТ ДВУХ НАПРВЛЕНИЙ ЕСЛИ ПЕРВОЕ УСЛОВИЕ TRUE
)if (d === "left") { ... }  то добавления элементов в массиве будет происходить
слева  если false то будет все происходит справа блок кода вкратце чтобы ты понял
что тут происходи если первое условие true то выполнится оно если false то другое
будет условие выполняться
*/


// const arr = [1,2,3,4,5,6,7,8]
// arr.push(9,10)  // этот метод у нас добовляет в коней
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.pop() // этот удаляет в конце
// console.log(arr)
// arr.shift()  // этот метод удаляет в начале
// console.log(arr)
// arr.unshift("Artem") // этот метод добовляет в начале
// console.log(arr)


