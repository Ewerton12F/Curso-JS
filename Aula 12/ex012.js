var agora = new Date()
var hora = agora.getHours()
if (hora < 24) {
    console.log(`São ${hora} horas.`)
    if (hora < 12) {
        console.log('Bom dia!')
    } else if (hora <= 18) {
        console.log('Boa tarde!')
    } else {
        console.log('Boa noite!')
    }
} else {
    console.log('Hora inválida!')
}
