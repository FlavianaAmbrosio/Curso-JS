var atual = new Date // esse comando pega a hora atual do cliente 
var hora = atual.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 12){
    console.log('Bom Dia!')
} else if (hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}