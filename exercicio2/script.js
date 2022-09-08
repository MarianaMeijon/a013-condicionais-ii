
// Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case. No arquivo `script,js` existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!

let nacionalidade = prompt("Digite aqui a nacionalidade: ").toLowerCase();

switch(nacionalidade){
    case "brasileira":
        console.log("A pessoa é do Brasil!")
        break;
    case "argentina":
        console.log("A pessoa é da Argentina")
        break;
    case "uruguaia":
        console.log ("A pessoa é do Uruguai")
        break;
    case "chilena":
        console.log ("A pessoa é do Chile")
        break;
    case "colombiana":
        console.log ("A pessoa é da Colômbia")
        break;
    default:
        console.log ("Nacionalidade não encontrada.")
        break;
}
