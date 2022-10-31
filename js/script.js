const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const pulo = () =>{
    mario.classList.add('pulo');

    setTimeout(() =>{
        mario.classList.remove('pulo');
    },500);
}

const loop = setInterval(() =>{

    const tuboPosicao = tubo.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px' , '');
    console.log(marioPosicao);
    
    if(tuboPosicao <= 120 && tuboPosicao > 0 && marioPosicao < 80) {
        tubo.style.animation = 'none';
        tubo.style.left=`${tuboPosicao}px`;

        mario.style.animation ='none';
        mario.style.bottom=`${marioPosicao}px`;

        mario.src = './/imgs/game-over.png';
        mario.style.width ='75px';
        mario.style.marginLeft ='50px';
    }

},10);

document.addEventListener('keydown', pulo);