// Завдання 1: Об'єднання елементів массива в один рядок

// Через цикл for
function joinArrayWithFor(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i !== arr.length - 1) {
            result += ', ';
        }
    }
    return result;
}

// Через метод join()
function joinArrayWithJoin(arr) {
    return arr.join(', ');
}

// Приклад використання
const array = ['apple', 'banana', 'orange', 'grape'];
console.log(joinArrayWithFor(array));
console.log(joinArrayWithJoin(array));


// Завдання 2: Працюємо з колекцією карток в Trello

const trelloCards = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];

// Видалити картку за індексом
function deleteCard(index) {
    if (index >= 0 && index < trelloCards.length) {
        trelloCards.splice(index, 1);
        console.log('Картка успішно видалена');
    } else {
        console.log('Індекс виходить за межі діапазону');
    }
}

// Додати картку
function addCard(card) {
    trelloCards.push(card);
    console.log('Картка успішно додана');
}

// Оновити картку за індексом
function updateCard(index, newContent) {
    if (index >= 0 && index < trelloCards.length) {
        trelloCards[index] = newContent;
        console.log('Картка успішно оновлена');
    } else {
        console.log('Індекс виходить за межі діапазону');
    }
}

console.log(trelloCards); // Початковий стан
deleteCard(1); // Видалення картки з індексом 1
console.log(trelloCards); // Після видалення
addCard('New Card'); // Додавання нової картки
console.log(trelloCards); // Після додавання
updateCard(0, 'Updated Card'); // Оновлення першої картки
console.log(trelloCards); // Після оновлення
