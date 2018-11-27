function Person(name){
    this.name=name;
}

Person.prototype.printName=function(){
    alert(this.name);
}

var person1=new Person('Byron');
var person2=new Person('Frank');
console.dir(Person);
console.log(person1);
console.log(person2);

function A() {this.name = "A"}
// function B() {this.name = "B",this.gender = "male"}
function B() {}
A.prototype.whatever = function() {/* some code */};
B.prototype = new A();
// console.dir(A);
console.dir(B);
// let b1=new B();
// console.log(b1);
// console.log(b1.name);
// console.log(b1.gender);
// B.prototype = A;
console.dir(B);
console.log(A,1111);
B.prototype.name1111=45455;
console.log(A,222);
console.log(A.name);
console.log(A.name1111);
console.log(A.s);