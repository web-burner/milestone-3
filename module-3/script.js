// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let num = 1; num <= numbers.length; num++) {
//   console.log(num);
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let num of numbers) {
//   console.log(num);
// }

// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// for (let fruit of fruits) {
//   console.log(`${fruit} i want to eat`);
// }

// let num = 1;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// // show number 1 to 10
// let number = 1;
// while (number <= 10) {
//   console.log(number);
//   number++;
// }

// // sum of all number
// let num = 1;
// let sum = 0;
// while (num <= 10){
//     sum+= num;
//     num++;
//     // console.log(sum);
// }
// console.log(sum)

// // even odd
// let num = 1;
// while (num <= 10) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
//   num++;
// }

// for loop

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

// // even odd
// for (let i = 1; i <= 10; i++) {
//   // console.log(i);
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // print 1 to 20
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// problem solving with for loop

// // sum
// let sum = 0;
// for (let i = 1; i <= 20; i++) {
//   sum += i;
// }
// console.log("sum of numbers 1 to 20", sum);

// // reverse
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 1; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 20; i++) {
//   if(i % 5 === 0){
//     console.log(i)
//   }
// }

let sum = 0;
for(let i = 1; i< 20 ; i++){
    if(i % 3 === 0){
        sum += i;
    }
}
console.log(sum);