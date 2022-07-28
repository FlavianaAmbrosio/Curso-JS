function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() //esse e o comando de cima são para pegar a hora atual do cliente
    msg.innerHTML = `Agora são ${hora} horas.` //vai aparecer a frase na primeira div
    if (hora >= 0 && hora < 12) {
        //bom dia 
        img.src = 'manha.png' //comando para chamar a foto da manhã na segunda div e assim por diante
        document.body.style.background = '#f7be4b' //esse comando muda a cor de fundo da página de acordo com a hora do dia
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#9a5d30'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#3e5257'
    }
}
