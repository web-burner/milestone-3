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