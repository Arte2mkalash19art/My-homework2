// 1. Створення масиву з трьох чисел і зміна значення другого елемента на 10.
let numbersArray = [1, 2, 3];
numbersArray[1] = 10;
console.table(numbersArray);

// 2. Створення масиву із трьох рядків і додавання ще одного рядка.
let stringsArray = ["one", "two", "three"];
stringsArray.push("four");
console.table(stringsArray);

// 3. Скрипт, що повертає суму всіх чисел в масиві.
let array = [5, 1, 4];
let sum = 0;
for (let i = 0; i < array.length; i += 1) {
  sum += array[i];
}
console.log(`Сума = ${sum}`);

// 4. Створення масиву з 5 чисел і виведення на екран всіх елементів масиву за допомогою циклу for.
let numbersArray2 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbersArray2.length; i += 1) {
  console.log(numbersArray2[i]);
}

// 5. Створення масиву із 5 рядків і виведення на екран кожного рядка, який містить більше 5 символів.
let stringsArray2 = ["one", "two", "three", "four", "five"];
for (let i = 0; i < stringsArray2.length; i++) {
  if (stringsArray2[i].length > 5) {
    console.log(stringsArray2[i]);
  }
}

// 6. Створення масиву з 10 чисел і знаходження максимального значення.
let numbersArray3 = [5, 8, 12, 3, 6, 10, 7, 20, 15, 1];
let maxNumber = Math.max(...numbersArray3);
console.log("Максимальне значення: " + maxNumber);

// 7. Створення масиву з 10 чисел і виведення всіх парних чисел.
let numbersArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbersArray4.length; i++) {
  if (numbersArray4[i] % 2 === 0) {
    console.log(numbersArray4[i]);
  }
}