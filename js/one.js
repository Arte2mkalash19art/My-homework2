//Завдання 1
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

// Приклад використання:
logItems(['Mango', 'Poly', 'Ajax']);


//Завдання 2
function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    return words.length * pricePerWord;
}

// Приклад використання:
console.log(calculateEngravingPrice("Hello world", 10)); // 20


//Завдання 3
function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Приклад використання:
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // "jumps"


//Завдання 4
function formatString(string) {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + '...';
    }
}

// Приклад використання:
console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // поверне оригінальний рядок
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // поверне обрізаний рядок з трьома крапками


//Завдання 5
function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

// Приклад використання:
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("Get best SALE offers now!")); // true
console.log(checkForSpam("SPAM emails are annoying")); // true


//Завдання 6
let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число (або натисніть Cancel для завершення)");

    if (input === null) {
        break;
    }

    input = Number(input);

    if (Number.isNaN(input)) {
        alert('Було введено не число, попробуйте ще раз');
    } else {
        numbers.push(input);
    }
}

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log('Масив чисел порожній');
}
