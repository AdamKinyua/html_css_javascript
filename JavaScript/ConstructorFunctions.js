//CONSTRUCTOR FUNCTIONS 
function ErrandBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}

var mike = new ErrandBoy("mike", 19, true , ["English, swahili"]);
console.log(mike.languages)
