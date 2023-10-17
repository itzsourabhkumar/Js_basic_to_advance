class hero {
  /* constructor(name) {
    this.name = name;
  } */
  name = "jay";
}

class Person extends hero {
  age = 23;
}

class boy extends Person {}

const Name = new boy();

console.log(Name);
