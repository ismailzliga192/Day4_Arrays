const Swap=[1 , 2 , 3 , 4]
let n1=Swap.pop()
let n2=Swap.shift()
Swap.push(n2)
Swap.unshift(n1)
console.log(Swap)