let arr1=[1, 2, 3]
let arr2=[3, 4, 5]
let merge=[]
for(i=0;i<arr1.length;i++){
     let temp=true
 for(j=0;j<arr2.length;j++){
   
    if(arr1[i]==merge[j]){
        temp=false
    }
 }
    if(temp){
        merge.push(arr1[i])
    }
}
for(i=0;i<arr1.length;i++){
     let temp=true
 for(j=0;j<arr2.length;j++){
   
    if(arr2[i]==merge[j]){
        temp=false
    }
 }
    if(temp){
        merge.push(arr2[i])
    }
}
console.log(merge)
