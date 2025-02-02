const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Allow other websites to talk to this API
app.use(express.json()); // Handle incoming JSON data

// Function to check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Function to check if a number is a perfect number
const isPerfect = (num) => {
  if (num <= 1) return false;
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num;
};

// Function to check if a number is Armstrong
const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + d ** power, 0);
  return sum === num;
};

// Function to get the sum of digits
const getSumOfDigits = (num) => num.toString().split("").reduce((acc, d) => acc + parseInt(d), 0);

// Function to get a fun fact from Numbers API
const getFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    return response.data;
  } catch (error) {
    return "No fun fact available.";
  }
};

// API Endpoint: GET /api/classify-number
app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query; // Get the number from the URL query

  if (!number || isNaN(number)) {
    return res.status(400).json({
      number,
      error: true,
    });
  }

  const num = parseInt(number);
  const properties = [];

  if (num % 2 === 0) properties.push("even");
  else properties.push("odd");

  if (isPrime(num)) properties.push("prime");
  if (isPerfect(num)) properties.push("perfect");
  if (isArmstrong(num)) properties.push("armstrong");

  const funFact = await getFunFact(num);

  res.json({
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties,
    class_sum: getSumOfDigits(num),
    fun_fact: funFact,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
