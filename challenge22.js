let arr=[4, 9, 2, 9, 1]
let greatest=arr[0]
let index=0
for(let i=0; i<arr.length;i++){
    if(arr[i]>greatest){
        greatest=arr[i]
        index=i
    }
    
}
console.log("value:",greatest,"index:",index)