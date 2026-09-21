let array =[3, 9, 1, 7]
let min = array[0]
for(let i of array){
    if(i < min)
        min = i
}
console.log(min)