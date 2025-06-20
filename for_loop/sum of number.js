
// let sum=0;
// let smallest=0;
// let largest=0;
// for( let i=0; i<=100; i++) {
//     sum+=100;
//     if()
// }
// document.write(sum);

let numbers =[54,33,22,-99,12,87,78,65,333,-55];
let largest =numbers[0];
let smallest =numbers[0];
let sum=0;
let avg=0;
for(let i=0; i<numbers.length; i++){
    let current =numbers[i];
    if (current>largest){
        largest=current;
    }
    else if(current<smallest){
        smallest=current;
    }
    sum+=current;
    avg=sum/numbers.length;

    
}
document.write(numbers + "<br>");
document.write(largest + "<br>");
document.write(smallest + "<br>");
document.write(sum + "<br>");
document.write(avg);

