//Number
var first = 12.0;
var second = 0x37CF; // hexadecimal
var third = 255; //octal
var fourth = 57; //binary
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
//String
var empName = "Donald";
var empDept = "IT";
var stmt = empName + " Works in " + empDept;
console.log(stmt);
//Boolean
var b = true;
console.log(b);
//void Type
function hello() {
    console.log("Happy Diwali..!");
}
hello();
//Null : Null represent a variable whose value is undefined
var num1 = null;
num1 = 100;
console.log(num1);
//undefined : Undefined primitive type denotes all uninitalized variable
var num2 = undefined;
num2 = 200;
console.log(num2);
//Any type
var val = "Hii";
val = 100; //ok
console.log(val);
val = false;
console.log(val);
//Any type in fuction
function myfunction(x, y) {
    console.log(x + y);
}
myfunction(100, 200);
myfunction("Happy", "Diwali");
