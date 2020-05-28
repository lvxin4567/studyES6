//https://www.jianshu.com/p/be7c95714586
function Person() {

}
var person = new Person();

//首先明确： 函数（Function）才有prototype属性，对象（除Object）拥有__proto__。

//每个对象都有一个属性__proto__  指向该对象的原型
// console.log(Person.__proto__ == Function.prototype)
// console.log(Person.prototype === person.__proto__)
// console.log(Person.prototype.__proto__ === Object.prototype);
// //每个原型都有一个 constructor 属性指向关联的构造函数 实例原型指向构造函数
// console.log(Person === Person.prototype.constructor);
// console.log(typeof(Person.prototype.constructor))

// prson.__proto__ --> Person.prototype
// Person.__proto__ --> Object.prototype
// Object.__proto__ --> null


console.log(person.__proto__.__proto__);


