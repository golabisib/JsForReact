// normal function:
// function dublicate(number){
//     const result = number * 2;
//     return result;
// }
// console.log(dublicate(5))

// arrow function =>
// const dublicate = (number) => number * 2;

// multi line arrow function
const dublicate = (number1,number2) =>{
    const newNubmer1 = number1 + 2
    const newNubmer2 = number2 + 3
    // next line is required
    return newNubmer1 + newNubmer2 ;

}
console.log(dublicate(5 , 3))
