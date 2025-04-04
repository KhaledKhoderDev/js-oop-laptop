# 💻 JavaScript OOP - Laptop Class

This is a simple Object-Oriented Programming (OOP) practice project using JavaScript.

## 📌 Overview

The project defines a `Laptop` class that simulates a basic laptop behavior:

- Tracks brand, model, and battery percentage.
- Allows using software (which drains battery).
- Allows charging the battery.

### ✅ Constructor:

```constructor(brand, model, batteryPercentage = 100)```

brand: The brand name of the laptop.

model: The model name.

batteryPercentage: Battery level (default is 100%)

### ⚙️ Methods:
**useSoftware()**:
- Uses 15% of the battery.
- Shows a warning if battery is too low.

**charge()**:
- Charges the battery by 25%.
- Battery is capped at 100%.

## 🧪 Example Usage

```js
const laptop1 = new Laptop('mac', 'pro');
laptop1.useSoftware();
laptop1.charge();
```

### 📂 Files
challenge-1.js: The main script that includes the class and example usage.

### 🚀 Purpose
This mini project is meant to practice JavaScript OOP principles.

### ✍️ Author
[Khaled Mohammed](https://github.com/KhaledKhoderDev)
