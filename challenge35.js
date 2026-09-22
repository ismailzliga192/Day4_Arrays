let split=[1, 2, 3, 4, 5, 6]
let odd=[]
let even=[]
for(i=0;i<split.length;i++){
    if(split[i]%2===0){
        even.push(split[i])
    }
    else{
        odd.push(split[i])
    }
}
console.log(odd)
console.log(even)