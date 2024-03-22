// abject destructuring
const data = {
    nameData:"Roozbeh" ,
    age: 22 ,
    address : {city: "tehran" , street:"golzar"}
};
// const name = data.nameData;
// const age = data.age;
// const city = data.address.city;
const {
    nameData ,
    age ,
    address ,
    address: { city , street}
} = data;
console.log(city)
