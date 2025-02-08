// 🏡 부모 객체
function Animal() {}

Animal.prototype.eat = function () {
  console.log("냠냠!");
};

// 🐕 자식 객체
function Dog(name) {
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype); // 부모 연결
Dog.prototype.bark = function () {
  console.log(this.name+ "멍멍!");
};

let ppoppi = new Dog("복현");
ppoppi.eat();  // 냠냠! (부모의 메서드)
ppoppi.bark(); // 멍멍! (자식의 메서드)

