// var multiply = function (x,y){
//     return x*y
// }
//-------------------------------------------------------------------
// var multiply = (x,y) => {return x*y}
//-------------------------------------------------------------------
// var multiply = (x,y) =>  x*y
//-------------------------------------------------------------------
// var double = x =>  2*y
//-------------------------------------------------------------------

//Binding in arrow function***********************************************************

//1. function Person(name){
//     this.name = name;
//     console.log(this);
//     setTimeout(function() { //simple function
//         console.log(this);//"this" has its own binding to window object
//     }, 1000);
// }
// var p = new Person("Manisha")

//-------------------------------------------------------------------
function Person(name){
    this.name = name;
    console.log(this);
    setTimeout(()=> { //arrow function do not have their own binding
        console.log(this);//"this" will pic its value from outer scope
    }, 1000);
}
var p = new Person("Manisha")