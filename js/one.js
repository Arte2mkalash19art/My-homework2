let beverage = prompt('Введіть напій бла бла').toLowerCase();
switch (beverage) {
  case "кава":
    console.log(`Вітаю ви вибрали каву`);
    break;
  case "чай":
    console.log(`Вітаю ви вибрали чай`);
    break;
  case "сік":
    console.log(`Вітаю ви вибрали сік`);
    break;
  default:
    console.log("Введіть правильну назву напою.");
} 

//Вибір коліру
let color = prompt(`Введіть колір світлофора`).toLowerCase();

switch (color) {
  case "червоний":
    console.log(`стоп`);
    break;
  case "зелений":
    console.log(`йти`);
    break;
  case "жовтий":
    console.log(`Чекай`);
    break;
  default:
    console.log("Введіть правильну назву кольору.");
}

//Поле введення номеру місяця для визначення пори року:
let month = Number(prompt(`Введіть номер місяця`));

switch (month >= 1 && month <= 12) {
  case month >= 3 && month <= 5:
    console.log(`Це весна`);
    break;
  case month >= 6 && month <= 8:
    console.log(`Це літо.`);
    break;
  case month >= 9 && month <= 11:
    console.log(`Це Осінь`);
    break;
  default:
    console.log(`Це Зима`);
}

//При натисканні на кнопку виводити кількість днів у цьому місяці.
const monthDay = parseInt(prompt("Введіть номер місяця."));
let daysInMonth;

switch (monthDay) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    daysInMonth = 31;
    console.log(daysInMonth);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    daysInMonth = 30;
    console.log(daysInMonth);
    break;
  case 2:
    const year = new Date().getFullYear(); //Нагуглив. Намагаюсь вирішити завдання тільки те що знаю, але іноді доводиться шукати інформацію.
    daysInMonth =
      year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
    console.log(daysInMonth);
  default:
    alert(`Ви ввели неправильний номер місяця!!!`);
}

//Поле введення для перевірки дня тижня
let enteredDay = prompt(`Введіть день тижня.`).toLowerCase();
switch (enteredDay) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п’ятниця":
    console.log("Це робочий день.");
    break;
  case "субота":
  case "неділя":
    console.log("Це вихідний день.");
    break;
  default:
    console.log("Введіть правильно день тижня.");
}

//калькулятор
let operator = prompt(`Введіть бажану дію "+" "-" "/-ділення" "*-множення"`);
let operand1 = parseFloat(prompt(`Введіть перше число.`));
let operand2 = parseFloat(prompt(`Введіть друге число.`));
let result;
switch (operator) {
  case "+":
    result = operand1 + operand2;
    break;
  case "-":
    result = operand1 - operand2;
    break;
  case "*":
    result = operand1 * operand2;
    break;
  case "/":
    if (operand2 === 0) {
      console.log("Помилка: ділення на нуль.");
    }
    result = operand1 / operand2;
    break;
  default:
    console.log("Невідома операція.");
}
console.log(result);
