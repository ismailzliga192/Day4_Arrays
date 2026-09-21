const array = [1, 2, 3, 4, 5]
const Array=[]
let n1=array[0]
for(let i=1; i<=4; i++){
    Array[i-1]=array[i]
}
Array.push(n1)
console.log(Array)