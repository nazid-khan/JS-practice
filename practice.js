// let a ,b ;
// function add(a ,b){
//     let c ;
//     c = a + b ;
//     console.log(c);

// }

// add(5 ,5);


// let x =  new Date("october 20, 2018 11:12:33");
// let y =  new Date("october 20, 2018 11:12:33");
// y.setDate(x.getDate()+73);
// console.log(x);
// console.log(y);



// function Student(first,last,age,cls){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;
// };
// var student1 = new Student("aman","khan",19,12);
// console.log(student1);
// var student2 = new Student("salman","khan",18,12);
// console.log(student2);
// var student3 = new Student("amaan","khan",19,12);
// console.log(student3);



//add new property in method using prototype
// function Student(first,last,age,cls){
//     this.first = first,
//     this.last = last,
//     this.age = age,
//     this.class = cls
// }
// var student1 = new Student("nazid","khan",20,13);
// Student.prototype.nationality = "indian";
// console.log(student1);




//add new tags
// let list = document.getElementById("list");
// let items = document.createElement("h1");
// items.textContent = "this is h1 tag";
// list.appendChild(items);



//remove parent and child element
// let parent = document.getElementById("list");
// let elm = parent.firstElementChild.nextElementSibling;
// console.log(elm);

// document.body.removeChild(parent);




//clone element
// let list1 = document.getElementById("list");
// console.log(list1);
// let clone = list1.cloneNode(true);
// console.log(clone);

// clone.id="list2";
//  document.body.appendChild(clone);




//replace child with another
// let parent = document.getElementById("list");

// let items = document.createElement("li");
// items.textContent = "services";

// let replace = parent.firstElementChild.nextElementSibling.nextElementSibling;

// parent.replaceChild(items,replace);





//adjacent html add 
// let elm = document.getElementById("list");
// let html = "<h1> New h1 tag </h1>";

// elm.insertAdjacentHTML("afterend",html);



//anonomus function
// let btn = document.getElementById("btn");

// btn.addEventListener("click",function(){
//     console.log("button was clicked")
// });

// btn.addEventListener("mouseover",function(){
//     console.log("mouse over activated")
// });

// btn.addEventListener("mouseout",function(){
//     console.log("mouse out activated")
// });



//remove event listner (only if we create a funtion)
// let btn = document.getElementById("btn");

// function click1(){
//     console.log("click1 activated..")
// }

// function click2(){
//     console.log("click2 activated..")
// }

// //add event and function call
// btn.addEventListener("click",click1);
// btn.addEventListener("click",click2);

// //remove event listner
// btn.removeEventListener("click",click1);



//Mouse event

// let btn = document.getElementById("btn");
// function click1(){
//     console.log("click1 activated..")
// }
// btn.addEventListener("mousedown",click1);(




// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// Examples

// function evenOrOdd(arr){
//     let result = arr.reduce((acc , curr)=> acc += curr , 0)
    
//     return result % 2 === 0 ? "even": "odd"
// }
// console.log( evenOrOdd([0]) , "even");

// console.log( evenOrOdd([1]) , "odd");

// console.log( evenOrOdd([]) , "even");

// console.log( evenOrOdd([0, 1, 5]) , "even");



// Create a function that takes two numbers as arguments and returns their sum.

// Examples
// function addition(num1 , num2){
//     return num1 + num2
// }
// console.log( addition(3, 2) , 5);

// console.log( addition(-3, -6) , -9);

// console.log( addition(7, 3) , 10);




let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let win;
let url = "http://www.google.com";
let feacher = 'height=500px,width=500px';

btn1.addEventListener("click",function(){
    win = window.open(url,"google",feacher);
});


btn2.addEventListener("click",function(){
    win = window.open("http://www.yahoo.com","google",feacher);
});


btn3.addEventListener("click",function(){
    win.close();
});























