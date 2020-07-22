let num = Number(prompt("Enter a positive number: "));
let arr = [];
for (let i =1;i<=num;i++)
{
    arr.push(i);
}
let array = arr.filter(el=>el>=0);
console.log(`Array = ${array}`);
let arrayofcubes = arr.filter(el=>el>=0).map(el=>el**3);
console.log(`Array of cubes = ${arrayofcubes}`);
