//  FUNÇÃO PARA  FAZER A VALIDAÇÃO DO NUMERO FALADO 
// UTILIZA A FUNC Number.isNaN(numero) PARA SABER SE FOI UM NUMERO OU FRASE  
function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute;

    if(ChuteForInvalido(numero)){
        const div = document.createElement('div');
        div.innerHTML ='Valor inválido';
        box.appendChild(div)
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        const div = document.createElement('div');
        div.innerHTML=`valor inválido: Fale um número entre ${menorValor} e ${maiorValor} `;
        box.appendChild(div);

        return
    }
    
    if(numero === numeroSecreto){
        document.body.innerHTML= `
        <h2> Você acertou! </h2>
        <h3> O número secreto era ${numeroSecreto}</h3>
        <button id='jogar-novamente' class="btn-jogar"> Jogar novamente</button>
        `
    } else if(numero > numeroSecreto){
       
        box.innerHTML +=`<div> O número  secreto é menor <i class="fa fa-long-arrow-down" aria-hidden="true"></i> </div>`
    }else{
        box.innerHTML +=`<div> O número  secreto é maior <i class="fa fa-long-arrow-up" aria-hidden="true"></i> </div>`
    }

}

function ChuteForInvalido(numero) {
    return Number.isNaN(numero);
}


function numeroForMaiorOuMenorQueOValorPermitido(numero){
     return numero > maiorValor || numero < menorValor
}



document.body.addEventListener('click',(e)=>{
  if(e.target.id=='jogar-novamente'){
    window.location.reload()
  }
})
