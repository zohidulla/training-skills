class Animal {
  constructor(age) {
    this.age = age;
  }

  move() {
    /* ... */
  }
}

class Mammal extends Animal {
  constructor(age, furColor) {
    super(age);
    this.furColor = furColor;
  }

  liveBirth() {
    /* ... */
  }
}

class Human extends Mammal {
  constructor(age, furColor, languageSpoken) {
    super(age, furColor);
    this.languageSpoken = languageSpoken;
  }

  speak() {
    /* ... */
  }

  toString() {
    return `Human of age ${this.age} with fur color ${this.furColor} speaks ${this.languageSpoken}`;
  }
}

const myFriend = new Human(25, 'white', 'English');

console.log(myFriend);

console.log(myFriend instanceof Human);
console.log(myFriend instanceof Mammal);
console.log(myFriend instanceof Animal);
console.log(myFriend instanceof Object);

console.log(myFriend.toString());
