//Перевести температуру з Цельсія у Фаренгейти за допомогою формули
const celsius = Number(prompt("Введіть значення в цельсія"));
alert("Результат: " + ((celsius * 9) / 5 + 32) + " по фаренгейту");

//Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення
const inputDays = Number(prompt("Введіть кількість днів:"));
const days = parseInt(inputDays);

if (!isNaN(days)) {
  const hours = days * 24;
  const minutes = days * 24 * 60;

  alert("Кількість в годин: " + hours + " Кількість в хвилинах: " + minutes);
} else {
  alert("Будь ласка, введіть коректне число днів.");
}

// Зменшення рівня здоров'я та енергії гравця
let health = 100;
let energy = 50;
health -= 35;
energy -= 13;
console.log("Рівень здоров'я після атаки:", health);
console.log("Рівень енергії після атаки:", energy);

// Застосування знижки в розмірі 10%
const purchaseAmount = 100;
const discountedAmount = purchaseAmount * 0.9;
console.log("Сума зі знижкою:", discountedAmount);

// Використання методу Math.floor() для округлення числа до меншого
const floatingNumber = 3.7;
const floorNumber = Math.floor(floatingNumber);
console.log("Округлене число:", floorNumber);

// Використання методу parseFloat() для перетворення рядка у десяткове число
const floatString = "5.5";
const parsedFloat = parseFloat(floatString);
console.log("Число після парсингу:", parsedFloat);

// Використання методу parseInt() для перетворення рядка у ціле число
const intString = "10";
const parsedInt = parseInt(intString);
console.log("Ціле число після парсингу:", parsedInt);

// Використання методу Math.sqrt() для обчислення квадратного кореня числа
const number = 16;
const squareRoot = Math.sqrt(number);
console.log("Квадратний корінь числа:", squareRoot);
