function removeClass(e){    
    if(e.propertyName != "transform") return;
    this.classList.remove("playing");
};

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const div = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return;

    audio.currentTime = 0;
    audio.play();

    div.classList.add("playing");
}


const allDivs = document.querySelectorAll('.key');
allDivs.forEach(div => div.addEventListener('transitionend', removeClass));
window.addEventListener("keydown", playSound);
