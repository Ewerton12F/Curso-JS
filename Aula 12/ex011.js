var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não é possível votar com mneos de 16 anos')
} else if (idade < 18 || idade > 65) { 
    console.log('Voto facultativo')
} else {
    console.log('Voto obrigatório')
}