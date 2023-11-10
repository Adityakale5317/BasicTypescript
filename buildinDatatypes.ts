//Number
 var first:number=12.0;
 var second:number=0x37CF; // hexadecimal
 var third:number=0o377; //octal
 var fourth:number=0b111001; //binary

 console.log(first);
 console.log(second);
 console.log(third);
 console.log(fourth);

//String

var empName:string="Donald";
var empDept:string="IT";

var stmt:string=empName+" Works in "+empDept;
console.log(stmt);

//Boolean
var b:boolean=true;
console.log(b);

//void Type

function hello():void{
    console.log("Happy Diwali..!");
}
hello();

//Null : Null represent a variable whose value is undefined
var num1:number=null;
num1 = 100;
console.log(num1);

//undefined : Undefined primitive type denotes all uninitalized variable
var num2:number=undefined;
num2=200;
console.log(num2);

//Any type
var val:any = "Hii";

val=100; //ok
console.log(val);

val=false;
console.log(val);

//Any type in fuction

function myfunction(x:any, y:any){
    console.log(x+y);
}
myfunction(100,200);
myfunction("Happy " , " Diwali ");



