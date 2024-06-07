// 1. Bank Account Object
const bankAccount = {
  ownerName: "John Doe",
  accountNumber: "123456789",
  balance: 1000,
  deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (amount > 0) {
      this.balance += amount;
      alert(`Deposit successful. New balance: $${this.balance}`);
      updateBankAccountUI();
    } else {
      alert("Enter a valid amount.");
    }
  },
  withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      alert(`Withdrawal successful. New balance: $${this.balance}`);
      updateBankAccountUI();
    } else {
      alert("Enter a valid amount or insufficient funds.");
    }
  },
};

function updateBankAccountUI() {
  document.getElementById("ownerName").textContent = bankAccount.ownerName;
  document.getElementById("accountNumber").textContent =
    bankAccount.accountNumber;
  document.getElementById("balance").textContent = bankAccount.balance;
}

// 2. Weather Object
const weather = {
  temperature: 0,
  humidity: 50,
  windSpeed: 10,
  checkTemperature() {
    this.temperature = parseFloat(
      document.getElementById("temperatureInput").value
    );
    if (this.temperature < 0) {
      document.getElementById("temperatureMessage").textContent =
        "Температура нижче 0 градусів Цельсія";
    } else {
      document.getElementById("temperatureMessage").textContent =
        "Температура вище або рівна 0 градусів Цельсія";
    }
  },
};

// 3. User Object
const user = {
  name: "",
  email: "",
  password: "",
  login() {
    this.name = document.getElementById("userName").value;
    this.email = document.getElementById("userEmail").value;
    this.password = document.getElementById("userPassword").value;

    // For demo purposes, the correct email and password are hardcoded
    const correctEmail = "test@example.com";
    const correctPassword = "password123";

    if (this.email === correctEmail && this.password === correctPassword) {
      document.getElementById("loginMessage").textContent = "Login successful!";
    } else {
      document.getElementById("loginMessage").textContent =
        "Invalid email or password.";
    }
  },
};

// 4. Movie Object
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,
  checkRating() {
    const isHighRating = this.rating > 8;
    if (isHighRating) {
      document.getElementById("movieTitle").style.color = "green";
    } else {
      document.getElementById("movieTitle").style.color = "red";
    }
    document.getElementById("movieTitle").textContent = `Title: ${this.title}`;
    document.getElementById("director").textContent = this.director;
    document.getElementById("year").textContent = this.year;
    document.getElementById("rating").textContent = this.rating;
  },
};

document.addEventListener("DOMContentLoaded", (event) => {
  updateBankAccountUI();
  document.getElementById("movieTitle").textContent = `Title: ${movie.title}`;
  document.getElementById("director").textContent = movie.director;
  document.getElementById("year").textContent = movie.year;
  document.getElementById("rating").textContent = movie.rating;
});
