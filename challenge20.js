let arr=[1, 2, 3, 5, 7, 9]
let sum=0
let max=arr[0]
for(i=1; i<arr.length;i++){
    if(max<arr[i])
        max=arr[i]
    sum+=arr[i]
}
sum=sum-max
console.log(sum/(arr.length-1))
