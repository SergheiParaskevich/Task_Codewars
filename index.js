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
 

// const min = (list) => {
//     var num1 = list.sort((a, b) => b - a)
//        return num1[0]
//    }
   
//    const max = (list) => {
//      var num2 = list.sort((a, b) => a - b)
//        return num2[0]
//    }

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };
// function makeList(arr) {
//   let a = `<li class="text-warning">${arr[0]}</li>`;
//   let b = `<li class="text-warning">${arr[1]}</li>`;
//   let c = `<li class="text-warning">${arr[2]}</li>`;
//   const failureItems = [];
//   failureItems.push(
//     a, b, c
//   )

//   return failureItems;
// }

// console.log(makeList(result.failure));

 


// function colourAssociation(array){
//   return array.map((item) => item.split(''))
// }
// console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]));

// const removeSmallest = (numbers) => {
//   const newArr = [];

//   if (numbers.length < 0) {
//     return [];
//   } else {
//     const findIndef = numbers.indexOf(Math.min(...numbers));
//     for (let i = 0; i < numbers.length; i++) {
//       newArr.push(numbers[i]);
//     }
//    return newArr.filter((elem, index) => index !== findIndef)
//   }
  
// };

// console.log(
//   removeSmallest([
//     173, 180, 164, 270, 127, 62, 234, 153, 252, 316, 244, 385, 175,
//   ])
// );


// function derDieDas(wort) {
//   let sum = 0;
//   const buchstabeArr = ["a", "e", "i", "o", "u", "ö", "ü", "ä"];
//   const wortToArr = wort.toLowerCase().split("");
//   for (let i = 0; i < buchstabeArr.length; i++) {
//     for (let j = 0; j < wortToArr.length; j++) {
//       if (buchstabeArr[i] === wortToArr[j]) {
//         sum++;
//       }
//     }
//   }
//   if (sum < 2) {
//     return `${"das"} ${wort}`;
//   } else if (sum > 3) {
//     return `${"der"} ${wort}`;
//   } else {
//     return `${"die"} ${wort}`;
//   }
// }

// console.log(derDieDas("hHaH"));
// function stray(numbers) {
//  if(numbers[0] === numbers[numbers.length - 1]){
//   return numbers.find(elem => elem !== numbers[0])
//  }return numbers.find( elem => elem !== numbers[1])
// }

// console.log(stray([2, 2, 1]));


// function findShort(s){

//    let toSplit = s.split(' ')
//      return toSplit.reduce((a,c) => (c.length < a.length ? a = c : a, a), toSplit[0]).length
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// function highAndLow(numbers){
  
//   let array = numbers.split(' ').map(elem => +elem).sort((a,b) => a - b).reverse();

    
//  let toArr =  [array[0],array[array.length-1]];
   
//   return toArr.join(' ')
//   }

//   console.log(highAndLow("1 9 3 4 -5"));


//   const arr = [1, 2, 3]
//   console.log(...arr)

// function lastSurvivor(letters, coords) {
//   let toString = letters.split("");

//   for (let i = 0; i < coords.length; i++) {
//     toString.splice(coords[i], 1);
    
//   }
//   return toString.toString()
// }

// console.log(lastSurvivor("kbc", [1, 1]));




// function  args_count ([arguments]) {
//  console.log(arguments.length()); 
// }

// args_count(1,2,3)

// let user = {
//   name: "Serhei",
//   age: 33,
//   adress: {
//     city: {
//       title: "Worms",
//     },
//   },
// };



// console.log( user["adress"]['city']['title']);
// console.log(user.adress.city.title);


// let city = {};
// city.title = 'Berlin'
// city['title'] = 'worms'
// city['strase'] = 'wolfram'

// console.log(city);

// const name = ['Serg', 'Alexa', 'Elina', 'Ewa']
// console.log(name['map']((elem) => elem));


// const newObj = {
//     '0': 'Molotok',
//     '1': 'Kuwalda',
//     '2': 'Ploskagubci'
// }

// console.log(newObj[0]);


// const sum = (...num) => {
//   console.log(num.reduce((acc, num) => acc + num));
// }

// sum(1,2,3,4)



// function multiplyAll (arrNumber)  {
//    return function (multiply_all){
//    return arrNumber.map(elem => elem * multiply_all)
//    multiply_all(2)
//    }
   
// }
// console.log(multiplyAll([1,2,3]) );


// function test (func) {
//   console.log(func());
// }
// test()

// const sumOfMinimums = (arr) => {
//   let a = 0;
//   for (let i = 0; i < arr.length; i++) {
//     a += Math.min(...arr[i]);
//   }
//   return a;
// };

// console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]));

// const covfefe = (str) => {
//     if (!str.includes("coverage")) {
//       return str + " covfefe";
//     } else {
//       let toarr = str.split(" ");
//       toarr.forEach((el, index) =>
//         el === "coverage" ? (toarr[index] = "covfefe") : el
//       );
//       return toarr.join(" ");
//     }
//   }




// function minSum(arr) {
//   let a = 0;

//   for (let i = arr.length; (i = arr.length); i++) {
//     a += arr.sort((a, b) => a - b).pop() * arr.shift();
//   }
//  return a 
// }

// console.log(minSum([5,4,2,3]));