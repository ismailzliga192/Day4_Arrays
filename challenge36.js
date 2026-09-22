let repeat=[1, 1, 2, 2, 2, 3, 1, 1, 1, 1]
let C=1
let maxcount=0
for(let i=0;i<repeat.length;i++){
    if(repeat[i]==repeat[i+1]){
        C++
    }else
        { if(C > maxcount){
        maxcount=C
        }
        C=1
}
    

}
console.log(maxcount)