// Crie um código que receba um número por **prompt**

const numero = Number ( prompt ("Digite um número: "))

// verifique se um número é divisível por 2 **ou** por 3

if (numero % 2 === 0) {
    console.log ("O número é divisível por 2.")
    if (numero % 3  === 0) {
        console.log("O número é divisível por 3.")
    }
} else {
    if (numero % 3 === 0) {
        console.log ("O número é divisível por 3.")
    } else {
        console.log ("O número não é divisível por 2 nem por 3.")
    }
}

// 2. Utilizando um operador lógico para unir duas operações relacionais

if (numero % 2 === 0 || numero % 3) {
    console.log ("O número é divisível por 2 ou por 3")
} else {
    console.log ("O número não é divisível nem por 2 e nem por 3.")
}