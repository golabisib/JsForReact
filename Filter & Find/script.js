// filter & find
//filter
const numbers = [3 ,80 , 90, 1, 10];
const newNumbers = numbers.filter((item) => item >= 10);
console.log(newNumbers)
//find first subject of filter (for unique items)
const newNumbers2 = numbers.find((item) => item >= 10);
console.log(newNumbers2)
