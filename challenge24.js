let arr=[2, 5, 8, 5]
let sum=0
let av=0
let min=arr[0]
let max=0
for(i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }
    if(min > arr[i]){
        min=arr[i]
    }
    sum+=arr[i]
    av=sum/(arr.length)
}
console.log("sum:",sum ,"average:",av ,"min:",min ,"max:",max)