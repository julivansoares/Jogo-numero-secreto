const box = document.getElementById('chute');



window.SpeechRecognition = window.SpeechRecongnition || 
webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang ='pt-Br';

recognition.start();


recognition.addEventListener("result", (e) => {
   const chute =  e.results[0][0].transcript;
   
   box.innerHTML=`
   <div>você disse:</div>
   <span class="box">${chute}</span>
   `
   verificaSeOChutePossuiUmValorValido(chute);
   

});

recognition.addEventListener('end',() => recognition.start());



