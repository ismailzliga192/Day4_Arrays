let arr=[4, 15, 8, 23, 1]
function contains(arr,value){
    for(let i=0;i<arr.length;i++){
    if(value==arr[i]){
     return true
    }
    }
    return false
    }
console.log(contains(arr,15))