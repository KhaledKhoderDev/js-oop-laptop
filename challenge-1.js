class Laptop {
  constructor(brand, model, batteryPercentage = 100) {
    this.brand = brand;
    this.model = model;
    this.batteryPercentage = batteryPercentage;
  }
  useSoftware() {
    if (this.batteryPercentage >= 15) {
      this.batteryPercentage -= 15;
      console.log(`Battery percentage is now ${this.batteryPercentage}`);
    } else {
      console.log('Battery is too low to use software');
    }
  }

  charge() {
    if (this.batteryPercentage < 100) {
      this.batteryPercentage += 25;
      if (this.batteryPercentage > 100) {
        this.batteryPercentage = 100;
      }
      console.log(`Battery after charging is now ${this.batteryPercentage}`);
    }
  }
}

const laptop1 = new Laptop('mac', 'pro');
const laptop2 = new Laptop('dell', 'alienware');
