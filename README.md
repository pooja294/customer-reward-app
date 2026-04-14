# Customer Rewards Dashboard

A React-based application that calculates and displays reward points for customers based on their transactions. The app includes filtering, pagination, and detailed transaction breakdowns.

---

# Features

* ✅ Customer selection with pagination
* ✅ Reward points calculation logic
* ✅ Monthly reward summary
* ✅ Expand/collapse transaction view
* ✅ Month & Year filters
* ✅ Default view: **Last 3 months data**
* ✅ Graceful handling of empty data
* ✅ Unit test coverage for reward logic

---

# Tech Stack

* React (Hooks)
* JavaScript (ES6+)
* Styled Components
* Jest (Unit Testing)

---

# Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/pooja294/customer-reward-app.git
cd customer-rewards-app
```

### 2. Install dependencies

```bash
npm install
```

---

# How to Run the Application

```bash
npm start
```

* App runs on: `http://localhost:3000`

---

# Run Test Cases

```bash
npm test
```

* Runs Jest test suite

---

# Project Structure

```
public/
│
├── data/
│   ├── transactions.json


src/
│
├── components/
│   ├── customerList.js
│   ├── rewardSummary.js
│   ├── transactionList.js
│   ├── filters.js
│   └── styles.js
│   └── pagination.js


│
├── utils/
│   ├── rewardCalculator.js
│   └── rewardCalculator.test.js
│   └── dateUtils.js
│
├── constants/
│   └── index.js
│
├── services/
│   └── api.js
│
├── App.js
└── logger.js
```

---

# Component Details

## 1. CustomerList

* Displays unique customers
* Supports pagination
* Allows selecting a customer
* Logs selection events

---

## 2. RewardSummary

* Core component for reward calculation
* Filters transactions by:

  * Customer
  * Month
  * Year
* Default behavior:

  * Shows **last 3 months data**
* Groups transactions by month
* Displays:

  * Monthly points
  * Total points
* Expand/collapse functionality per month

---

## 3. TransactionList

* Displays transaction details
* Shows:

  * Amount
  * Calculated reward points
* Styled using card layout
* Includes centered **“Transactions”** heading

---

## 4. Filters

* Dropdowns for:

  * Month (JAN–DEC)
  * Year (2025–2021)
* Updates reward summary dynamically

---

## 5. Reward Calculator (Utility)

### Logic:

* No points for amount ≤ 50
* 1 point per dollar for amount between 50–100
* 2 points per dollar for amount > 100

---

# Application Screenshots

## Dashboard View

<img width="3000" height="1824" alt="image" src="https://github.com/user-attachments/assets/66fdc538-d5c0-4885-9996-d15acccc99dc" />
<img width="3000" height="1822" alt="image" src="https://github.com/user-attachments/assets/192fae2b-6ea4-455a-b5d1-53c607d37f24" />


## Customer Selection

<img width="3000" height="1376" alt="image" src="https://github.com/user-attachments/assets/552f5b01-fdfc-4397-937b-d722c7078d16" />


## Rewards Summary (Expanded)

<img width="3000" height="1816" alt="image" src="https://github.com/user-attachments/assets/b4c37589-fe4a-4c4e-8f14-6c14a46dc61c" />
<img width="3000" height="1814" alt="image" src="https://github.com/user-attachments/assets/a32a0aa9-81b6-4de4-b471-64856b02b8ba" />


## No Transactions State

<img width="3000" height="1836" alt="image" src="https://github.com/user-attachments/assets/43289217-727b-4ea8-b42e-fe0545842b9b" />


---

# Test Case Results

## Jest Test Success Output

<img width="1608" height="1270" alt="image" src="https://github.com/user-attachments/assets/396f2cf0-497c-4f1c-93a8-6b9a0362a163" />


---
