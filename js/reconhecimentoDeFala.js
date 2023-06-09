const box = document.getElementById('chute');



window.SpeechRecognition = window.SpeechRecongnition || 
webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang ='pt-Br';

recognition.start();


recognition.addEventListener("result", (e) => {
   const chute =  e.results[0][0].transcript;
   
   const div = document.createElement('div');
   div.innerHTML="você disse:";
   
   const span = document.createElement('span');
   span.classList.add='box'
   span.innerHTML= chute
   
   box.appendChild(div);
   box.appendChild(span);
   
   verificaSeOChutePossuiUmValorValido(chute);
   

});

recognition.addEventListener('end',() => recognition.start());



