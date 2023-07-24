// const obj = {
//   item2: "This",
//   item3: "A",
//   item4: "Artem",
//   item5: "Bro"
// }

// function showMeKeys(obj) {
//   for (let key in obj) {
//       console.log(key)// здесь ты просто выводишь все ключи обьекта
//     }
//   }
// function showMeValue(obj){
//   for(let key in obj){
//     console.log(obj[key]) // здесь ты выводишь все значение обькта
//   }
// }

// console.log("This is key:")
// showMeKeys(obj)
// console.log("This is value")
// showMeValue(obj)
// Задача для проверки в обьекте ключей и его свойств на на количесво из длины

const obj = {
  Ihave:"enough",
  money:"to",
  buy:"a",
  car:"model"
} // пока это просто обьект где нужно добавить свойства и ключи которые равны 5

function giveMeFive(obj) {
  let newArr = [] //это массив куда будет записваться свойства и ключи обьекта
  for(const key in obj){ //затем ты при помощи for in начинаешь пробегаться по обьекту
     if(key.length === 5){//если длина ключей равна 5
      newArr.push(key) // то эти ключи ты добавляешь в новый массив
     }


     const value = obj[key] // в этой переменной у тебя будет храниться свойства из обьекта
     if(value && value.length === 5){ // то есть если свойство существйет и оно равно 5
      newArr.push(value) // то мы добовляем их в массив
     }

     // два варианта как можно решить задачу
    //  if(obj[key] && obj[key].length === 5){ // то есть если свойство существйет и оно равно 5
    //   newArr.push(obj[key]) // то мы добовляем их в массив
    //  }
  }
  return newArr // заетем то что ты добавил в массив ты просто возращаешь это значение
}

const result = giveMeFive(obj)
console.log(result)
























