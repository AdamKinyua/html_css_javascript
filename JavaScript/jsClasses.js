class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }

  play() {
    console.log(`Weeeeeeee, I'm ${this.type}`)
  }
}

const play1 = new Wizard("davido", "capricon");
play1.introduce();
play1.play();

const play2 = new Wizard("Shelly", "witch");
play2.introduce();
play2.play();
