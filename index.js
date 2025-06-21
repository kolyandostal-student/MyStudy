function createObj() {
  let result = {
    day: 0,
    month: 0,
    year: 0,
    fullDate: 0,
    isLeap: 0,
    whatDay: 0,
    userAge: 0,
  }
  return result
}

function getDay() {
  let day = prompt("Введите день своего рождения", "11")
  return +day
}
function getMonth() {
  let month = prompt("Введите месяц своего рождения", "7")
  return +month
}
function getYear() {
  let year = prompt("Введите год своего рождения", "1812")
  return +year
}

function fullDate(day, month, year) {
  let fullDate = day + "." + month + "." + year
  return fullDate
}

function isLeap(year) {
  let isLeap = false
  if (year % 100 === 0) {
    return isLeap
  } else if (year % 4 === 0) {
    return (isLeap = true)
  } else {
    return isLeap
  }
}

function whatDay(day, month, year) {
  let daysName = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ]
  let date = new Date(year, month - 1, day)
  let whatDay = daysName[date.getDay()]

  return whatDay
}

function userAge(year) {
  let currentYear = new Date()
  let userAge = currentYear.getFullYear() - year
  return userAge
}

const numbersPaint = {
  0: [" *** ", "*   *", "*   *", "*   *", " *** "],
  1: ["  *  ", " **  ", "  *  ", "  *  ", " *** "],
  2: [" *** ", "*   *", "   * ", "  *  ", "*****"],
  3: ["*****", "   * ", " *** ", "   * ", "*****"],
  4: ["*   *", "*   *", "*****", "    *", "    *"],
  5: ["*****", "*    ", "**** ", "    *", "**** "],
  6: [" *** ", "*    ", "**** ", "*   *", " *** "],
  7: ["*****", "   * ", "  *  ", " *   ", "*    "],
  8: [" *** ", "*   *", " *** ", "*   *", " *** "],
  9: [" *** ", "*   *", " ****", "    *", " *** "],
  " ": ["     ", "     ", "     ", "     ", "     "],
}

function renderDate(fullDate) {
  const cleanDate = fullDate.replace(/[-.]/g, " ")
  const lines = ["", "", "", "", ""]

  for (const char of cleanDate) {
    const pattern = numbersPaint[char] || numbersPaint[" "]
    for (let i = 0; i < 5; i++) {
      lines[i] += pattern[i] + "  "
    }
  }

  console.log(lines.join("\n"))
}

//Собираю ответы в объект

function writeAnswers(result) {
  this.day = getDay()
  console.log("Число вашего рождения:", this.day)
  this.month = getMonth()
  console.log("Месяц вашего рождения:", this.month)
  this.year = getYear()
  console.log("Год вашего рождения:", this.year)
  this.fullDate = fullDate(this.day, this.month, this.year)
  console.log("Полная дата вашего дня рождения:", this.fullDate)
  this.isLeap = isLeap(this.year)
  console.log("Высокосный ли год вашего рождения:", this.isLeap)
  this.whatDay = whatDay(this.day, this.month, this.year)
  console.log("Какой день недели был когда вы родились:", this.whatDay)
  this.userAge = userAge(this.year)
  console.log("Вам:", this.userAge, "лет.")
  this.dateOfBirthDraw = renderDate(this.fullDate)
}

writeAnswers()
