function mammal(name, numEyes) {
  return {
    name: name,
    isWarmblooded: true,
    numEyes: numEyes,
    evolve: function() {
      console.log("I'm not mutating, I'm evolving.");
      this.numEyes++;
    },
    explainYourSelf: function() {
      console.log(
        `I'm just a ${this.name} with ${this
          .numEyes}  eye(s). Nothing to see here.`
      );
    },
  };
}

const tiger = mammal('tiger', 2);
tiger.explainYourSelf();
tiger.evolve();
tiger.explainYourSelf();

const oneEyedBadger = mammal('badger', 1);
oneEyedBadger.explainYourSelf();


// In this example, mammal is a factory function. 
// The job of a factory function is to create an individual instance of some model — in this case, 
// an individual instance of an animal. Inside the factory function, we indicate the properties and 
// default values that all instances of an animal will have.