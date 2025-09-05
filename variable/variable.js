// const a = 4;
// console.log(a);
// var x =30;
// var y ="hello world";
// document.write(x);
// document.write(y);
// if (x>30){
//     document.write("true");
// }else{
//     document.write("false");
// }
// Global Scope 
var global = "hello ashikuzzaman";
function  ashik (){
    console.log (global);
}
console.log(global);
function local (){
    var local = "hello local";
    console.log(local);
}
local();
// console.log(local); // error
// block scope