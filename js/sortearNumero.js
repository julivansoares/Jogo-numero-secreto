const menorValor =20;
const maiorValor =1000;

const elementoMenorValor =document.getElementById('menor-valor')
elementoMenorValor.innerHTML=menorValor;

const elementoMaiorValor =document.getElementById('maior-valor')
elementoMaiorValor.innerHTML=maiorValor;


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1 )
}

