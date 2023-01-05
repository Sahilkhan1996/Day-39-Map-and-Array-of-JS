//Problem 2

let randomNumberArr = [];
for(let i=0 ; i< 10 ; i++){
    let randomNumber = Math.floor(Math.random()*900+100);
    randomNumberArr.push(randomNumber);
}

console.log(randomNumberArr);

function secondSmallestNumber(randomNumberArr){
    let ascendingArr = randomNumberArr.sort((a,b)=>a-b);
    console.log(`Second Smallest Number is ${ascendingArr[1]}`);
}
secondSmallestNumber(randomNumberArr);

function secondLargestNumber(randomNumberArr){
    let descendingArr = randomNumberArr.sort((a,b)=>b-a);
    console.log(`Second Largest Number is ${descendingArr[1]}`);
}

secondLargestNumber(randomNumberArr);
