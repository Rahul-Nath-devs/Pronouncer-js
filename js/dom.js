
// js starts
let speakBtn = document.querySelector(`.Btn`)
let text = document.querySelector(`#textField`)

speakBtn.addEventListener(`click`,function(){

    let speech =new SpeechSynthesisUtterance(text.value)

    speechSynthesis.speak(speech)
})

// js ends