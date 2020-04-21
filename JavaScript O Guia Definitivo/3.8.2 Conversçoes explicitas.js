// → JAVASCRIPT CONVERTE O TIPO AUTOMATICAMENTE.
// É POSSÍVEL REALIZAR CONVERSÕES EXPLICITAS CASO NECESSÁRIO OU PARA MANTER O CÓDIGO CLARO.

// PARA EXPLICITAR UMA CONVERSÃO, USA-SE AS FUNÇÕES: 
// Boolean(), Number(), String() ou Object().
Number('3')                 // => 3
String(false)               // => "false" ou use false.toString()
Boolean([])                 // => verdadeiro
Object(3)                   // => novo Number(3)

// NULL & UNDEFINED:
// RESULTADO → MÉTODO toString() == FUNÇÃO String()
// TypeError AO TENTAR CONVERTER EM UM OBJETO

// → CONVERSÃO DE TIPO IMPLÍCITA:


// FUNÇÕES GLOBAIS parseInt() e parseFloat()
// • paseInt() analisa somente inteiros
// • parseFloat() analisa inteiros e números em ponto flutuante
parseInt('3 blind mice')    // => 3
parseFloat(' 3.14 meters')  // => 3.14
parseInt('-12.34')          // => -12
parseInt('0xFF')            // => 255
parseInt('0xff')            // => 255
parseInt('-0XFF')           // => -255
parseFloat('.1')            // => 0.1
parseInt('0.1')             // => 0
parseInt('.1')              // => NaN: inteiros não podem começar com "."
parseFloat('$72.47')        // => NaN: números nõa podem começar com "$"

// USANDO FUNÇAÕ Number() PARA CONVERSÃO SEM ESPECIFICAR SE É INTEIRO OU PONTO FLUTUANTE:
Number('3')                 // => 3
Number('3.14')              // => 3.14