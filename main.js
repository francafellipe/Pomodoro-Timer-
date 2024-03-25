const buttonToggleMode = document.getElementById('toggle-mode');
const htmlElement = document.documentElement;

buttonToggleMode.addEventListener("click", function(event) {
    console.log(event);
    htmlElement.classList.toggle('light');
});

const seconds = document.querySelector('#seconds')
const minutes = document.querySelector('#minutes')
const buttonplay = document.querySelector('.ph-play-circle')

let inicio = 60
let fim = 0 
let minutos = 25

buttonplay.addEventListener("click", function(event) {
    console.log(event)
    const htmlElement = document.getElementById('timer')
    htmlElement.classList.toggle('running')
    
    var intervalo = setInterval(function(){

        inicio--

        if (inicio < 0) {
            minutos--
            inicio = 59 
        }

        let segundosFormatados = inicio < 10 ? '0' + inicio : inicio
        let minutosFormatados = minutos < 10 ? '0' + minutos : minutos

        seconds.innerText = segundosFormatados
        minutes.innerText = minutosFormatados

        if (minutos === fim && inicio === fim) {
            clearInterval(intervalo)
        } 

    }, 10);
});

const buttonstop= document.querySelector('.ph-stop-circle');

buttonstop.addEventListener("click", function(event) {
    console.log(event);
    htmlElement.classList.toggle('running');
});

const musicButton = document.querySelector('[data-action="toggleMusic"]');
musicButton.addEventListener('click',function(event){
    const musicIcon = musicButton.querySelector('i')
    if (musicIcon.classList.contains('ph-speaker-none')){
        musicIcon.classList.remove('ph-speaker-none')
        musicIcon.classList.add('ph-speaker-high')
    } else {
        musicIcon.classList.remove('ph-speaker-high')
        musicIcon.classList.add('ph-speaker.none')
    }
})
