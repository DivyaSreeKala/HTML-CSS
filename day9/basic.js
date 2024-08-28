console.log("hello world")

//Variable Declaration

//var
var a=9;//security issues in using var as it can be manipuated globally
console.log(a)//o/p :9

{
    var a=90;
    console.log(a);//o/p :90
}

console.log(a)//o/p :90


console.log("let variable")
//let
let b = 22;
console.log(b);// o/p :22
// let b=33 is not possible unlike var. Cannot redeclare block-scoped variable 'b'.

{//block of code
    // console.log(b);reference error Cannot access 'b' before initialization
    let b = 50;
    console.log(b); // o/p:50
}

console.log(b); // o/p:22


//const 

const c = 4;
console.log(c);//o/p:4

{
    //console.log(c); reference error
    const c=2;
    console.log(c)//o/p:2
}



//Datatypes

//string
let firstName = 'Niya';
console.log(typeof(firstName));//o/p:string


//number
console.log(typeof(a));//number


//Boolean
var flag = true;
console.log(typeof(flag));//Boolean




//undefined

let hello;
console.log(hello);//o/p:undefined


//object

let world = null;
console.log(typeof(world));//o/p:object


//Array

let arr = [23,24,'hello'];
console.log(arr);//o/p:[ 23, 24, 'hello' ]

//access a particular index
console.log(arr[2]);//o/p:hello


//length of array
console.log(arr.length);//3


//add an element to array
arr.push(30);

console.log(arr);//o/p:[ 23, 24, 'hello', 30 ]

//remove an element from array
arr.pop();
console.log(arr);//o/p:[ 23, 24, 'hello' ]



//Object

//Method 1
let person = {
    //property:value
    name:'Maya',
    age:20,
    gender:'female'
}

console.log(person.name)//o/p:Maya


// Method 2
let car = new Object();
console.log(car)//o/p:{}

car.model='i10';
car.color='grey';
car.company='Hyundai';
console.log(car)//o/p:{ model: 'i10', color: 'grey', company: 'Hyundai' }

//Array of objects
let lst = [
    {
        name:'Maya',
        age:25
    },
    {
        name:'Niya',
        age:20
    }
]

console.log(lst);//o/p:[ { name: 'Maya', age: 25 }, { name: 'Niya', age: 20 } ]

console.log(lst[1].name);//o/p:[ { name: 'Maya', age: 25 }, { name: 'Niya', age: 20 } ]


//Assignment operators
let z=2;
z*=4;
console.log(z);

//Arithmetic operators
let t = 12;
let m = t++;
console.log(m);//o/p:12
console.log(t);//o/p:13

//prefix

let t1 = 12;
let m1 = ++t1;
console.log(m1);//o/p:13
console.log(t1);//o/p:13

t1=2;
m1='2';

if (t1===m1) {
    console.log("both type of values and values are same")
}
else if (t1==m1) {
    console.log("only values are same");
}
else {
    console.log("values are not same")
}
//o/p:only values are same


//Function

//Function call (using return)
let result = add(2,3);//The result is 5
console.log("The result is " + result);
//Function definition
function add(a,b){

    let result = a + b;
    return(result);

}

//substraction
function subtract (a,b){
    return(a-b);
}

let res = subtract(10,2);
console.log("The difference is",res);

//Loops
for(let i=0;i<10;i++){
    console.log(i+1)
}

//for in loop(key gets all the properties/fields in the object )
for (const key in car) {
    console.log(key);
    console.log(car[key]);//gets value of the respective property
    console.log('\n');
    // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
}


//for of loop(prints all the contents in array)
for (const item of arr) {
    console.log(item);
}

//while loop
let i=0;
while(i<10){
    console.log(i+1);
    i++;
}
let j=0;
do{
    console.log(j+1);
    j++;
}while(j<10);