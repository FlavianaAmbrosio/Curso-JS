var idade = 34
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log('Não vota') // se a idade for menor do que 16
} else if(idade < 18 || idade > 65){
    console.log('Voto opcional.') // se a idade for entre 16 e 18 ou maior que 65
} else {
    console.log('Voto obrigatório.') //todas as outras possibilidades
}