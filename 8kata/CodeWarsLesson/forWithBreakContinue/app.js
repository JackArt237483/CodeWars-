//задача где ты при помощи break and continue работаешь с массивом
// c for и for of

const dolls = ["Mickey Mouse","Barbie doll","Hello Kitty","Snow white"]
//это просто массив строк

// function Dools(dolls){//это просто функция с аргументом массива
//   let bag = [] // переменная с пустым массивом куда будут попадать индексы из массива
//   for(let i = 0;i < dolls.length;i++){ // здесь ты просто пробегаешься по массиву
//    const doll = dolls[i] //это переменая которая будет хранить индексы массива или строчки
//    //которые уже мы перебрали при помощи for
//    if(doll === "Hello Kitty" || doll ===  "Barbie doll"){ //тут идет проверка если есть
//     // в массиве dools вот эти элеметы
//       bag.push(doll) // то мы добовляем их в массив массив bag То есть в новый массив
//    } else {
//     continue // если эти элементы не равны не равны doll === "Hello Kitty" || doll ===  "Barbie doll"
//     //вот этим двух элементам но операция прерывается и итерация цикла идет дальше
//    }
//    if (bag.length === 3) { // и если тут операция массив bag не равен 3 индексам
//     // то операция прерывается
//     break
//    }
//   }
//   return bag
// }

// console.log(Dools(bag))

function getRightNumber(dools) {
  let bag = []
  for (let doll of dools) {
     if(doll === "Hello Kitty" || doll ===  "Barbie doll"){
      bag.push(doll)
     } else {
      continue
     }
     if(bag.length === 3) {
      break
     }
   }
   return bag
}





















