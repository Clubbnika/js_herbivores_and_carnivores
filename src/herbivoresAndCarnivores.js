'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name = 'Zebra') {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name = 'Tiger') {
    super(name);
  }

  bite(prey) {
    if (!(prey instanceof Herbivore)) {
      return;
    }

    if (prey.hidden) {
      return;
    }

    prey.health -= 50;

    if (prey.health <= 0) {
      const index = Animal.alive.indexOf(prey);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
