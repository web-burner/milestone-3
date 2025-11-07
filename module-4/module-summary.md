array : array কে আমি একটা ডিমের ঝুড়ির সাথে তুলনা করতে পারি। যার মধ্যে একাধিক ভ্যালুর একটা কালেকশন থাকবে। এই ভ্যালু হতে পারে নাম্বার,স্ট্রিং বা বুলিয়ান ইত্যাদি। তবে একই টাইপ এর ভ্যালু একটা array এর মধ্যে থাকবে মিক্সড ভ্যালু থাকবে না।

// array declare
const numbers = [12,13,24,345,35,23];

array length : array এর মধ্যে কয়টা এলিমেন্ট আছে তা জানা যায়।

example: // array length
const numbers = [1,2,3,4,5,6,7];
console.log(numbers.length)

array index : serial number of element .
এই সিরিয়াল শুরু হয় ০ থেকে।

index নাম্বার দিয়ে এলিমেন্ট বের করার উপায়
// array index
const numbers = [1,2,3,4,5,6,7];
const forth = numbers[3]
console.log(forth)

set and update element by index:

example : // set element and update by index
const numbers = [1,2,3,4,5,6,7];
numbers[3] = 99;
console.log(numbers)

add and remove from array
push : array এর শেষে এলিমেন্ট add করার জন্য use হয়।

example : // push method  
const numbers = [1,2,3,4,5,6,7];
numbers.push(8);
numbers.push(9);
console.log(numbers)

example -2 :
const numbers = [1,2,3,4,5,6,7];
numbers.push(8,9,10);
console.log(numbers)

pop method : array এর শেষে এলিমেন্ট রিমুভ করে।

example :
// pop method
const numbers = [1,2,3,4,5,6,7];
numbers.pop();
console.log(numbers)

example - 2: // store in variable pop element
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const out1 = numbers.pop();
const out2 = numbers.pop();
console.log(numbers);
console.log(out1, out2);


shift : array এর শুরুতে এলিমেন্ট বাদ দেয়।

example :
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.shift();
console.log(numbers);


unshift : array এর শুরুতে এলিমেন্ট add করে। 

example : //unshift method 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.unshift(0);
console.log(numbers);