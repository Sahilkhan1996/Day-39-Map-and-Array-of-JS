//Problem 1

console.log(randomNumber);
let randomNumberArr=[];
for(let i = 0 ; i<10 ; i++){
    let randomNumber = Math.floor(Math.random()*900+100);
    randomNumberArr.push(randomNumber);
}

console.log(randomNumberArr);

function findSecondLargestElem(randomNumberArr){
    let first = -1 , second = -1;

    for(let i = 0; i <= randomNumberArr.length-1; i++){
        if(randomNumberArr[i] > first){
            // second = first;
            first = randomNumberArr[i];
        }  
    }

    for(let i = 0 ; i<=randomNumberArr.length-1;i++){
        if (randomNumberArr[i]>second && randomNumberArr[i]<first){
            second = randomNumberArr[i];
        }
    }
    if(second==-1){
        console.log("There is no Second largest Number");
    }else{
        console.log(`Second Largest Number is ${second}`);
        return;
    }
    // console.log(second);
}
// let arr = [12, 35, 1, 10, 34, 1]
findSecondLargestElem(randomNumberArr);

function findSecondSmallestElem(randomNumberArr){
    let smallest = Number.MAX_VALUE ;
    let secondSmallest = Number.MAX_VALUE;
    for(let j=0 ; j<=randomNumberArr.length-1;j++){
        if(randomNumberArr[j]<smallest){
            smallest= randomNumberArr[j];
        }
    }

    for(let j=0; j<=randomNumberArr.length-1;j++){
        if(randomNumberArr[j]<secondSmallest && randomNumberArr[j]>smallest){
            secondSmallest = randomNumberArr[j];
        }
    }
    if(secondSmallest==-1){
        console.log("There is no Second Smallest number");
    }else{
        console.log(`The Second Smallest Number is ${secondSmallest}`);
        return;
    }
}
findSecondSmallestElem(randomNumberArr);
