const result = 5 + 5 + "5";
console.log(result);

// Перевірка наявності символу @ у змінній email
const email = "example@example.com";
const containsAtSymbol = email.includes('@');
const emailLength = email.length;
console.log(`Чи містить email символ @: ${containsAtSymbol}`);
console.log(`Загальна кількість символів у email: ${emailLength}`);

// Запис кожного слова в окрему змінну та їх поєднання
const word1 = "My";
const word2 = "name";
const word3 = "is";
let fullName = `${word1} ${word2} ${word3}`;
fullName += ' Viktor';
console.log(`Повне ім'я: ${fullName}`);

// Виведення повідомлення про оплату через alert
const userName = "Олександро";
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
