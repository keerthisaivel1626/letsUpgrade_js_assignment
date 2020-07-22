let jsonObject = [];

let url = "https://jsonplaceholder.typicode.com/todos";

// USING FETCH

// console.log("USING FETCH");

// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));


//USING ASYNC AND AWAIT

// console.log("USING ASYNC AND AWAIT");

// async function completedToDos()
// {
//     const response = await fetch(url);

//     let data = await response.json();

//     console.log(data);

//     for(let i = 0; i < 200; i++)
//     {
//         jsonObject = JSON.stringify(data[i]);
        
//         if(jsonObject.includes("true"))
//         {
//             console.log(jsonObject);
//         }
//     }
// }
// completedToDos();


//JSON PLACEHOLDER

console.log("JSON PLACEHOLDER");

let str = jsonObject.forEach(element => {
    JSON.stringify(url);
}); 

let data = JSON.stringify(jsonObject);
console.log(data)
console.log(str);
