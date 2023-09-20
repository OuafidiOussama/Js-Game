const holesNumber = 6;
let currentHole;
const grid = document.getElementById('grid');
function startGame(){
    for(let i = 0; i < holesNumber; i++){
        const container = document.createElement('div');
        container.className = 'container';
        
        const blackHole = document.createElement('img');
        blackHole.src = './assets/balckhole.png';
        blackHole.alt = '';
        blackHole.className = 'blackhole rotate';

        const div = document.createElement('div');
        div.id = `${i}`;

        container.appendChild(blackHole);
        container.appendChild(div);
        grid.appendChild(container);
    }

    setInterval(setCharacter, 2000)
}

function getRandomHole(){
    let num = Math.floor(Math.random() * holesNumber);
    // let lastHole = num;
    // // if(lastHole){
    // //     console.log('repeated Hole')
    // //     getRandomHole();
    // // }
    return num.toString();
}

function setCharacter(){

    const previousCharacter = grid.querySelector('.character');
    if (previousCharacter) {
        previousCharacter.remove();
    }

    const character = document.createElement('img');
    character.src = './assets/hungry.png';
    character.alt = '';
    character.className = 'character';
    character.style.transform = 'scale(0)';

    let num = getRandomHole();
    currentHole = document.getElementById(num);
    
    currentHole.appendChild(character);

    setTimeout(()=>{
        character.style.transform = 'scale(1)'
    }, 1000)
    

}
