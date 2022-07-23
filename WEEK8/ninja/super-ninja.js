class Ninja {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log(this.name);
  }

  showStats() {
    console.log(`
      Name: ${this.name}
      Health: ${this.health}
      Speed: ${this.speed}
      Strength: ${this.strength}
    `);
  }

  drinkSake() {
    this.health += 10;
    console.log(`Health: ${this.health}`);
  }

}

class Sensei extends Ninja {
  constructor(name) {
    super(name, 200);
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdon() {
    super.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.")
  }
}