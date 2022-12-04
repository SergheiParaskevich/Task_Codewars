// let isAnagram = function(test, original) {
//         const testToSplit = test.toLowerCase().split('').sort().join('');
//         const originalToSplit = original.toLowerCase().split('').sort().join('');

//         return testToSplit === originalToSplit ? true : false;
// };

// console.log(isAnagram('Test', 'SeTt'))





// const getCount = (str) => {
//         let sum = 0;
//    const strToArray = str.split('');
//    console.log(strToArray);
//    for (let i = 0; i < strToArray.length; i++) {
//        if(strToArray[i] ==  'a'){
//                 sum++;
//        }else if(strToArray[i] == 'i'){
//         sum++;
//        }else if(strToArray[i] == 'o'){
//         sum++;
//        }else if(strToArray[i] == 'e'){
//         sum++;
//        }else if(strToArray[i] == 'u'){
//         sum++;
//        }else{
        
//        }
        
   
// }return sum}

// console.log(getCount('abriiaca  dabra"'));



// function solution(nums){
//     if(nums == undefined){
//       return []
//     } return  nums.length !== 0 ? nums.sort((a, b) => a - b) : []
//  }

//  console.log(solution([1,5,8,9,41,1,52,]));


// function zeroArray(m, n) {
//   let newArray = [];
//   let row = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       row.push(0);
//     }

//     newArray.push(row);
//   }
//   return newArray;
// }

// let matrix = zeroArray(2, 1);
// console.log(matrix);

// function fizzbuzz(n) {
//   let arrCheck = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 5 == 0 && i % 3 == 0) {
//       arrCheck.push("FizzBuzz");
//     } else if (i % 5 == 0) {
//       arrCheck.push("Buzz");
//     } else if (i % 3 == 0) {
//       arrCheck.push("Fizz");
//     } else {
//       arrCheck.push(i);
//     }
//   }
//   return arrCheck;
// }

// console.log(fizzbuzz(30));

// const isSquare = (n) => Math.sqrt(n) % 1 == 0 ? true : false ;

// console.log(isSquare(-1));


// const filter_list = (l) => l.filter((item) => typeof item == 'number');

// function squareDigits(num) {
//   arrSum = [];
//   const newArr = num.toString().split("");

//   for (let i = 0; i < newArr.length; i++) {
//     arrSum.push(Math.pow(newArr[i], 2));
//   }
//   return  typeof +arrSum.join("");
// }
 

const min = (list) => {
    var num1 = list.sort((a, b) => b - a)
       return num1[0]
   }
   
   const max = (list) => {
     var num2 = list.sort((a, b) => a - b)
       return num2[0]
   }

 


