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

let btn = document.getElementById("btn");
function click1(){
    console.log("click1 activated..")
}
btn.addEventListener("mousedown",click1);























