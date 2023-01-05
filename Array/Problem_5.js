
// Problem 5

let arr = [];
for(let i=0 ; i<100 ; i++){
   let digit = i.toString();
//    console.log(typeof digit);
    // let reverseDigit = digit.split(" ").reverse().join(" ");
    // console.log(digit[0]);
    if(digit[0]===digit[1]){
        // console.log(digit);
        arr.push(+digit);
    }
}
console.log(arr);



  