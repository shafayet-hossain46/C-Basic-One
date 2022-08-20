// const arr = ["Ami", "Rup",  "Suchishmeeta", "Praptika"]
// let longestOne = "";
// for(let i = 0; i < arr.length; i++){
//     const element = arr[i]
//     if(element.length > longestOne.length){
//         longestOne = element;
//     }
// }
// console.log(longestOne);
const arr = ["Amisafsdfsdafsadffd", "Rup", "Suchishmeeta", " Praptika"]
let leng = 0;
let longest = "";
for (let i = 0; i < arr.length; i++) {
    if (leng < arr[i].length) {
        longest = arr[i];
        leng = arr[i].length;
    }
}
// console.log(longest)
const {a, b} = {x:2, y:3}
console.log(a,b);