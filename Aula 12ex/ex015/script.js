function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('iAno')
    var res = document.querySelector('div#res')
    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        window.alert('[ERRO] Verifique os dados e teste novamente')
    } else {
        var sexo = document.getElementsByName('nSex')
        var idade = ano - nasc.value
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (sexo[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}