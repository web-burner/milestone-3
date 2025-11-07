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