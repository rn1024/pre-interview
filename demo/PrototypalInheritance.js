/**
 * 原型题目
 * 1.每个对象的__proto__属性指向构造函数的prototype，prototype成为原型对象
 * 2.原型对象的constructor属性指向构造函数本身
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 */

function Person (nick, age) {
  this.nick = nick;
  this.age = age;
}

Person.prototype.sayName = function() {
  console.log(this.nick);
}

var Child1 = new Person('SamuelCN', 18);

var Child2 = new Person('Benstyle', 10);

console.log('Child1.__proto__ and Child2.__proto__', Child1.__proto__ === Child2.__proto__);
console.log('Child1.__proto__ and Person.prototype', Child1.__proto__ === Person.prototype);
console.log('Person.prototype.constructor === Person.prototype', Person.prototype.constructor === Person);

console.log('Object.create(null)', typeof Object.create(null))


/**
 * 原型继承
 * 含义: 属性继承指的是通过一个类执行一个构造函数，通过call指定this为当前的环境，这样可以知道另外一个类的所有属性
 */

function Teacher(nick, age, subject) {
  Person.call(this, nick, age);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

var Teacher1 = new Teacher('1', 1, '数学');
console.log('Teacher1', Teacher1, Teacher1.__proto__);


