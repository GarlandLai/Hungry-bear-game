import $ from 'jquery';

export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.distanceRan = 0;
    this.distanceSafety = 100;
    this.level = 1.0
    this.food = 3;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  displayHunger() {

      console.log(this.foodlevel);

  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
    this.food --;
  }

  ran() {
    this.distanceRan += 10;
  }
}
