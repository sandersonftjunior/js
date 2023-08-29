let num = [0, 7, 2]
num [3] = 3
num.sort()
/*
num.push(7) colocar no ultimo
num.length quanto tem, tamanho
num,sort() colocar em ordem crscente
*/

console.log(`Nosso vetor é o ${num}`)
console.log(`o vetor tem ${num.length} posições`)
console.log(num[1])

for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}