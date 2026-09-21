let array=[3, 9, 1, 7]
let range=0
let min=array[0]
let max=0
for(let i of array){
    if(i < min)
        min = i
 if(i > max)
        max = i
}
range = max - min
console.log(range)
