# NumClassifier-api

### **📌 README.md for Number Classifier API**
```md
# 📊 Number Classifier API

## 🚀 Overview
The **Number Classifier API** is a simple RESTful API that takes a number as input and returns interesting mathematical properties about it, including whether it is **prime**, **perfect**, **Armstrong**, and whether it is **even or odd**. Additionally, it fetches a **fun fact** about the number from the Numbers API.

---

## 📌 Features
✅ Classifies numbers as **odd** or **even**  
✅ Checks if a number is **prime**  
✅ Checks if a number is **perfect**  
✅ Checks if a number is an **Armstrong number**  
✅ Calculates the **sum of its digits**  
✅ Fetches a **fun fact** about the number from the [Numbers API](http://numbersapi.com/)  
✅ **CORS-enabled** for cross-origin requests  
✅ Returns **JSON responses**  

---

## 🛠️ Technology Stack
- **Node.js** (JavaScript runtime)
- **Express.js** (Lightweight web framework)
- **Axios** (For making API requests)
- **CORS** (To allow cross-origin requests)
- **Dotenv** (For managing environment variables)(I did'nt make use of this)

---

## 📥 Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Anthonyuketui/NumClassifier-api.git
cd NumClassifier-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Server**
```sh
node server.js
```
The server will start running at **http://localhost:3000**

---

## 📡 API Endpoints

### **🔹 Classify a Number**
**GET** `/api/classify-number?number=<your_number>`

#### **✅ Example Request**
```sh
GET http://localhost:3000/api/classify-number?number=371
```

#### **✅ Example Response (200 OK)**
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "class_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### **❌ Invalid Input (400 Bad Request)**
```json
{
    "number": "alphabet",
    "error": true
}
```

---

## 🌎 Deployment

1. **Push your code to GitHub**
```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Anthonyuketui/NumClassifier-api.git
git push -u origin main
``
   ```

### **🚀 Deploy on Vercel**
1. Install **Vercel CLI**
```sh
npm install -g vercel
```
2. Run **Vercel Deployment**
```sh
vercel
```
3. Follow the prompts, and get your **public URL**.

---

## 📜 Status Codes & Error Handling
| Status Code | Description |
|-------------|------------|
| **200 OK** | Successfully processed the request |
| **400 Bad Request** | Invalid or missing number parameter |
| **500 Internal Server Error** | Unexpected server error |

---

## 📜 License
This project is **open-source** and available under the **MIT License**.

---

## ✨ Author
**Tony Uketui**  
🔗 GitHub: [@Anthonyuketui](https://github.com/Anthonyuketui)  
📧 Email: [Your Email]  

---

## 🎯 Contributing
Feel free to **fork**, **open issues**, or submit **pull requests** to improve this API! 🚀
```

---

### **📌 What This README Covers**
✅ **Project Overview**  
✅ **Features**  
✅ **Installation & Setup**  
✅ **API Usage & Examples**  
✅ **Deployment Guide (Render & Vercel)**  
✅ **Error Handling & Status 
