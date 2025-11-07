what is loop ?
= কোনও একটি শর্ত অনুসারে একটা কাজ একাধিক বার করার যে প্রক্রিয়া তাঁকে লুপ বলে 

 const : value will never change 
 let : value can change 
 var : i will not use var anymore 

for of loop: for array

example-1 : 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
  console.log(num);
}

example-2 :
const fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let fruit of fruits) {
  console.log(`${fruit} i want to eat`);
}


while loop : এখানে শর্ত দিয়ে কোনও একটা কাজ সম্পন্ন করা হয় যতক্ষণ শর্ত true হবে ততক্ষণ লুপ চলতেই থাকবে। 

let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

এখানে নাম হচ্ছে initialize ভ্যালু 
while এর মধ্যে condition দিয়ে একটি কাজ করা হবে যদি condition সত্য হয়। 
তারপর initialize ভ্যালু ১ করে বাড়বে (num++) এবং 1 বেড়ে বেড়ে যখন কন্ডিশন false করবে তখন থেমে যাবে 

cannot use infinite loop 
infinite loop is that loop which loop has a condition which is always return a true value.


problem solving with while loop 

example : // show number 1 to 10
let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

 example 2 : // sum of all number 
let num = 1;
let sum = 0; 
while (num <= 10){
    sum+= num;
    num++;
    // console.log(sum);
}
console.log(sum)


example 3 : // even odd
let num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}


for loop : 

for(initializer; condition; increment/decrement){
    loop body;
}

example: simple for loop
for(let i = 1; i<=10; i++){
    console.log(i);
}

example-2 : // even odd
for (let i = 1; i <= 10; i++) {
  // console.log(i);
  if (i % 2 === 0) {
    console.log(i);
  }
}

example-3 : // print 1 to 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}


problem solving with for loop 

example - 1 : // sum
let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log("sum of numbers 1 to 20", sum);


example - 2 : // reverse (decremental)
for (let i = 10; i > 0; i--) {
  console.log(i);
}


different ways to use loop :

1. even/odd (using modulus);
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

2. even/odd (without modulus)
for (let i = 1; i < 20; i += 2) {
  console.log(i);
}


3. number can devisible by 5

for (let i = 1; i < 20; i++) {
  if(i % 5 === 0){
    console.log(i)
  }
}


4. sum of numbers that can divide by 3
let sum = 0;
for(let i = 1; i< 20 ; i++){
    if(i % 3 === 0){
        sum += i;
    }
}
console.log(sum);


break and continue : 

break : এর মাধ্যমে লুপ কে কন্ডিশন অনুযায়ী থামিয়ে দেওয়া যায়। মানে কন্ডিশন যেখানে মিলে যাবে তখন লুপ সেখানেই থেমে যাবে।

example: 
for (let i = 1; i < 20; i++) {
  console.log(i);
  if (i === 10) {
    break;
  }
}

for (let i = 1; i < 20; i++) {
  console.log(i);
  if (i >= 10) {
    break;
  }
}

continue : এর মাধ্যমে লুপ এর মধ্যে কোনো এলিমেন্ট কে স্কিপ করে দিতে ব্যবহার করা হয়। মানে কন্ডিশন অনুযায়ী যে এলিমেন্ট টা মিলে যাবে তাঁকে স্কিপ করবে। 

example: 
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

let i = 1;
while (i <= 20) {
  i++;
  if (i % 5 !== 0) {
    continue;
  }
  console.log(i);
}

এখানে i এর value আগেই increment করা হয়েছে কারণ পরে increment করলে লুপ স্কিপ হয়ে যাচ্ছে তাই আর increment হচ্ছে না। 