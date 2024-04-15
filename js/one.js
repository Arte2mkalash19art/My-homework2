//№1 field1 це мають бути змінні з перевіркою про кількість символів
if (field1 && field2) {
  alert("Обидва поля заповнені");
} else {
  alert("Не всі поля заповнені");
}

//логіку отримання даних ми не знаємо
let sum = field1 + field2;
if (sum > 10) {
  alert("Sum is greater than 10");
} else {
  alert("Сума менша або дорівнює 10");
}

//№3
let text = "JavaScript";
if (text.includes("JavaScript")) {
  alert("Текст містить слово JavaScript");
} else {
  alert("Текст не містить слово JavaScript");
}

//№4
let number = 14;
if (number > 10 && number < 20) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}

//#5
let name = "Artem";
let email = "pizadolgmail.com";
let password = "134143";
if (name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6) {
  alert("інша_сторінка.html");
} else {
  alert("Дані введені неправильно");
}