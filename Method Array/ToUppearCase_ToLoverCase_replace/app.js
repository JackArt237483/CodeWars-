// задача на вот эти методы  19: методы строкового объекта- от заглавного() до строчного() и replace()


const str = "HELLOW ARTEM IS THE MY BRO"

function getNewStrimng(str) {

  const words= str.split(" ")

  const getNewWord = words.map(word => {

    const lastLetter = word.slice(-1).toLowerCase()

    const startLetter = word.slice(0,-1).toUpperCase()

    return startLetter + lastLetter
  })

  const newStr  = getNewWord.join(" ")

  return newStr
}

console.log(getNewStrimng(str))



/*\
 самое банальное и блин легкое функция с один аргуметом
 это строка
 1)  const word = str.split(" ") это ты берешь и разбиваещь строку по
 по словам в массив
 2)const getNewWord = words.map(word => {
   И ту происходми такая вещь ты при помощи map
   cоздаешь новый массив где будет у символа в строке
   нижний регистр А у остальный все заглвное
  })
3)  const lastLetter = word.slice(-1).toLoverCase()
      здесь ты получаешь поледний индекс элемента в строке и
      превращаей его в нижний регистр
    const startLetter = word.slice(0,-1).toUpperCase()
      здесь ты наоборот получаешь все слова и переводишь их в
      верхний регистр
    return startLetter + lastLetter
      потом ты их просто возращает комбинированный массив
4)const newStr  = getNewWord.join(" ")

  return newStr здест мы простоо массив обратно меняем на строчку
*/

// const str = "Hellow mother funcker Artem"

// const word1 = str.toUpperCase() // все слова возводит в верхний регистр
// const word2 = str.toLowerCase() // все слова возводит в нижний регистр

// console.log(word1)
// console.log(word2)

// const word = str[0].toLowerCase() + str.slice(0)

// console.log(word)

// const str = "Hellow mother funcker Artem"

// const sajfga =str.replace("Hellow","Ferter") // вот этот метод тебе у тебя
// // заменяет какие то данные

// console.log(sajfga)