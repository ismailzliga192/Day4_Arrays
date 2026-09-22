let arr1=[4, 15, 8, 23, 1]
let arr2=[]
for(i=0;i<arr1.length-1;i++){
    if(arr1[i]>10){
        arr2.push(arr1[i])
    }
}
console.log(arr2)