let Val=[4, 9, 2, 9, 7]
let max=Val[0]
let max2=0
for(i=0;i<Val.length;i++){
    
    if(Val[i]>max){
    max=Val[i]
}
    if(Val[i]!==max && Val[i]>max2){
        max2=Val[i]
    }
}
console.log(max2)