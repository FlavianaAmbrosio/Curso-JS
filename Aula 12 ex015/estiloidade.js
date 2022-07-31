function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('ano')
    var res = window.document.querySelector('div#res')
    if (fano.value.lenght ==0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }
    var sexo = window.document.getElementsByName('sex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto') // essa var e esse comando fazem a mesma coisa de que seu tivesse colocado uma <img> na segunda div do html com um id='foto'
    if (sexo[0].checked) {
        gênero = 'homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'menininho.png')
        } else if (idade < 21) {
            img.setAttribute('src','oadolescente.png')
        } else if (idade < 60){
            img.setAttribute('src', 'adulto.png')
        } else {
            img.setAttribute('src','idoso.png')
        }
    } else if (sexo[1].checked) {
        gênero = 'mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'menininha.png')
        } else if (idade < 21) {
            img.setAttribute('src','aadolescente.png')
        } else if (idade < 60){
            img.setAttribute('src','adulta.png')
        } else {
            img.setAttribute('src','idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}