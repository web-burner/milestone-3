string : variable এর ভ্যালু কে single/double/backtic/new String কোটেশন এর মাধ্যমে ডিক্লেয়ার করা হয় তাই string। 

example : 
const country = "bangladesh";
const division = `Cumilla`;
const name = new String("shaon");
console.log(country, division, name);

string length : মাধ্যমে string এর মধ্যে কয়টা বর্ণ আছে তা জানা যায় তবে এটি white space কেও কাউন্ট করে। 

example: // string length
const country = "Bangladesh";
console.log(country.length);

get alphabet by index : // get element by  index
const country = "Bangladesh";
console.log(country[0]);

কিন্তু এইখানে index নাম্বার দিয়ে element get করা যায় ঠিক কিন্তু এলিমেন্ট change করা যায় না। string is immutable means not changeable . 