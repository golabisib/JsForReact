// reduce
const numbers = [2, 3, 9, 5, 1];
const result = numbers.reduce(
    (accumulator,currentItem) => accumulator + currentItem,
     0
     );
console.log(result)
// const result = numbers.reduce(
//     (accumulator,currentItem) => accumulator + currentItem,
//      primary accumulator
//      );
// Another one:
const result2 = numbers.reduce(
    (accumulator , currentItem) => accumulator * currentItem,
    1
)
console.log(result2)
