// методы строкового объекта--concat() split() и его хорошего друга join()
// задасча у тебя есть строка и аггумент на которм тебе надо это все разбить

// const newWords = str.split(" ")
// console.log(newWords)
// const getNewWords = str.split("").join(sim)
// console.log(getNewWords)
// const af = getNewWords.join("")
// console.log(af)


const str = "Hi my name is Artem"
const sim = "/"


function getNewStr(str,sim) {
  const newWords = str.split(" ")

  const getNewWords =  newWords.map(words => words.split("").join(sim))

  const result = getNewWords.join(" ")

  return result
}

console.log(getNewStr(str,sim))

//return str.split(" ").map(words => words.split("").join(sim)).join("")
// как вариант можно решить в одну строчку


/*
1)Есть функция с двумя аргументами
str - это строка и sim это аргумент на который мы будем разбивать строку
2) const newWords = str.split(" ")
вот эта запсись у тебя разделяет строчку по пробелам
3)const getNewWords =  newWords.map(words => words.split("").join(sim))
В этой строке мы создаем новый массив на основе старого
то есть мы разделяем по символам и добовляем символы по символам
4) const result = getNewWords.join(" ")

  return result
  потом мы береми и соединяем новый массив в строчку
*/
