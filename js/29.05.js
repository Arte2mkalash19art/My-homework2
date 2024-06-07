//№1
document.getElementById("helloBtn").addEventListener("click", () => {
  alert("Hello World!");
});
//№2
const randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("checkBtn").addEventListener("click", () => {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const result = document.getElementById("result");

  if (userGuess === randomNumber) {
    result.textContent = "Congratulations! You guessed the number.";
  } else if (userGuess < randomNumber) {
    result.textContent = "Too low! Try again.";
  } else {
    result.textContent = "Too high! Try again.";
  }
});
//№3
let count = 0;
document.addEventListener("click", () => {
  count++;
  document.getElementById("clickCount").textContent = `Clicks: ${count}`;
});
//№4
const applyCallback = (array, callback) => {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray.push(callback(array[i]));
  }
  return resultArray;
};

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = applyCallback(numbers, (num) => num * num);

console.log(squaredNumbers);
//№5
const calculateDiscountedPrice = (price, discountPercentage, callback) => {
  const discount = (price * discountPercentage) / 100;
  return callback(price - discount);
};

const discountedPrice = calculateDiscountedPrice(
  100,
  20,
  (discounted) => discounted
);

console.log(discountedPrice);
