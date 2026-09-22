arr=[1, 2, 2, 3, 1, 4]
result=[]
for(i=0;i<arr.length;i++){
   let temp=true
   for(let j=0;j<result.length;j++){
     if(arr[i]=== result[j]){
       
         temp=false
   
    }}
     if(temp){
        result.push(arr[i])
       }
}
console.log(result)