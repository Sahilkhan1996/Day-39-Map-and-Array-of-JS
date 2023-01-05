// Problem 2

// let arr = new Map();
// for(let i=1 ; i<=50 ; i++){
//     let birthMonth = Math.floor(Math.random()*12+1);
//      arr.set(i,birthMonth);
// }
// console.log(arr);
// let january = new Map();
// let feb = new Map();
// let march = new Map();
// let april = new Map();
// let may = new Map();
// let june = new Map();
// let july = new Map();
// let august = new Map();
// let septemper = new Map();
// let october = new Map();
// let november = new Map();
// let december = new Map();

// for(let i=1; i<=50;i++){
//      if(arr.get(i)==1){
//         january.set(i,1);
//      }
//      if(arr.get(i)==2){
//         feb.set(i,2);
//      }
//      if(arr.get(i)==3){
//         march.set(i,3);
//      }if(arr.get(i)==4){
//         april.set(i,4);
//      }if(arr.get(i)==5){
//         may.set(i,5);
//      }if(arr.get(i)==6){
//         june.set(i,6);
//      }if(arr.get(i)==7){
//          july.set(i,7);
//     }if(arr.get(i)==8){
//         august.set(i,8);
//      }if(arr.get(i)==9){
//         septemper.set(i,9);
//      }if(arr.get(i)==10){
//         october.set(i,10);
//      }if(arr.get(i)==11){
//         november.set(i,11);
//      }if(arr.get(i)==12){
//         december.set(i,12);
//      }
    
// }

// console.log(`Number of persons having Birthday in January are ${january.size}`);
// console.log(`Number of persons having Birthday in February are ${feb.size}`);
// console.log(`Number of persons having Birthday in March are ${march.size}`);
// console.log(`Number of persons having Birthday in April are ${april.size}`);
// console.log(`Number of persons having Birthday in May are ${may.size}`);
// console.log(`Number of persons having Birthday in June are ${june.size}`);
// console.log(`Number of persons having Birthday in July are ${july.size}`);
// console.log(`Number of persons having Birthday in August are ${august.size}`);
// console.log(`Number of persons having Birthday in September are ${septemper.size}`);
// console.log(`Number of persons having Birthday in october are ${october.size}`);
// console.log(`Number of persons having Birthday in November are ${november.size}`);
// console.log(`Number of persons having Birthday in December are ${december.size}`);

// // Problem 1
 let arr = new Map();
// let arr1 = new Map();
// let arr2 = new Map();
// let arr3 = new Map();
// let arr4 = new Map();
// let arr5 = new Map();

let i = 1;
let one =0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
while(one<=10 && two<=10 && three<=10 && four<=10 && five<=10 && six<=10){
    
    let randomNumber = Math.floor(Math.random()*6+1);
    
    if(randomNumber === 1){
        one++;
       // arr.set(1,one);
    }else if(randomNumber === 2){
        two++;
        //arr1.set(2,two);
    }else if(randomNumber === 3){
        three++;
        //arr2.set(3,three);
    }else if(randomNumber === 4){
        four++;
        //arr3.set(4,four);
    }else if(randomNumber === 5){
        five++;
        //arr4.set(5,five);
    }else if(randomNumber === 1){
        six++;
        //arr5.set(6,six);
    }

    arr.set(i,randomNumber);
    i++;
}

 console.log(arr);



//console.log(window);

// second method
// Problem 1

// let arr = new Map();
// let i =1;
// while(arr.get(i)===1<10 && arr.get(i)===2<10 && arr.get(i)===3<10 && arr.get(i)===4<10 && arr.get(i)===5<10 && arr.get(i)===6<10){
  
// let randomNumber = Math.floor(Math.random()*6+1);
//     arr.set(i,randomNumber);
//     i++;

// };

// console.log(arr)