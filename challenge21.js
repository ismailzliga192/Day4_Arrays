let arr=[3, 6, 1]
let sum=0
let rounded=0
for(i=0; i<arr.length;i++){
    sum+=arr[i]
}
sum=sum/(arr.length)
console.log(sum)
rounded=Math.round(sum*100)/100
console.log(rounded)
