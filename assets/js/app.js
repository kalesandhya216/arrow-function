
var cl = console.log;

// Hoisting >> All declarations in the scope are get shifted at the top of the scope.

cl(add(2,2));
// function declaration

function add(x,y){
	return x + y;
}

// cl(add2(2,2));
// function expression

var add2 = function(x,y){
	return x + y;
}

cl(add2(2,2));

// arrow functions / lmabda functions / fatty arrow functions

// es6 arrow functions provides us a alternation way of writing function with shorter syntax
// Arrow directly returns a value

// var add3 = function(x,y){
	// return x + y;
// }

var add3 = (x,y) => x + y;
cl(add3(5,5));

// var add4 = (x,y) => {
// cl(x + y);
// }

var add4 = (x,y) => cl(x + y);
add4(6,6);

// var multiplyby2 = (x) => {
	// return x * 2;
// }

var multiplyby2 = x => x * 2;
cl(multiplyby2(10));


// we can't use "this" keyword in arrow function
// In arrow function "this" keyword always point to Window Object

var person = {
	fname:"Jhon",
	lname:"Doe",
	age:33,
	fullName: function(){
		cl(this);
		return '${this.fname} ${this.lname}';
	},
};

cl(person.fullName());


var person1 = {
	fname:"Jen",
	lname:"Doe",
	age:23,
	fullName: () => {
		cl(this);
		return '${this.fname} ${this.lname}';
	},
};

cl(person1.fullName());

// Ex.1) ====================================

// var sub = function(x,y){
	// return x - y;
// }

var sub = (x,y) => cl(x - y);
sub(25,20);

// Ex.2) ====================================

var add5 = (a,b) => cl(a + b);
add5(25,25);


var student1 = {
	fname:"Dipa",
	lname:"Kulkarni",
	age:20,
	fullName: function(){
		cl(this);
		return '${this.fname} ${this.lname}';
	},
};

cl(student1.fullName());


var student2 = {
	fname:"Shruti",
	lname:"Deshmukh",
	age:24,
	fullName: () => {
		cl(this);
		return '${this.fname} ${this.lname}';
	},
};

cl(student2.fullName());

// Ex.3) ====================================

var divby5 = y => y / 5;
cl(divby5(42));

// Ex.4) ====================================

var mul = (x,y) => cl(x * y);
mul(10,20);

// Ex.5) ====================================

var add = (a,b,c) => cl(a + b + c);
add(24,30,70);

// Ex.6) ====================================

var subof2 = (x,y) => cl(x - y);
subof2(425,320);


var emp1 = {
	fname:"Asha",
	lname:"Shinde",
	age:26,
	salary:40000,
	fullName: function(){
		cl(this);
		return '${this.fname} ${this.lname}';
	},
};

cl(emp1.fullName());


var emp2 = {
	fname:"Kshitija",
	lname:"Kalyankar",
	age:30,
	salary:60000,
	fullName: () => {
		cl(this);
		return '${this.fname} ${this.lname}';
	},
};

cl(emp2.fullName());

// Ex.7) ====================================

var mulby5 = (n) => n * 5;
cl(mulby5(22));


// Ex.8) ====================================

var divby10 = (m) => m / 10;
cl(divby10(250));