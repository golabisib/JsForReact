//async/await
// past:
// fetch ('https://jsonplaceholder.typicode.com/todos')
// .then((res) => res.json())
// .then((json) => console.log(json));
// now:
// normal function:
// async function getData(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const json = await res.json();
//     console.log(json);
// }
// arrow function:
const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await res.json();
    console.log(json)
}
getData();
