const holesNumber = 6;
const grid = document.getElementById('grid');

for(let i = 0; i < holesNumber; i++){
    const container = document.createElement('div');
    container.className = 'container';

    const blackhole = document.createElement('img');
    blackhole.src = './assets/balckhole.png';
    blackhole.alt = '';
    blackhole.className = 'blackhole rotate';
    blackhole.id = `${i+1}`;

    const character = document.createElement('img');
    character.src = './assets/hungry.png';
    character.alt = '';
    character.className = 'character';

    container.appendChild(blackhole);
    container.appendChild(character);
    grid.appendChild(container);
}

function getRandomHole(){
    let num = Math.floor(Math.random() * holesNumber);
    let lastHole = num;
    if(lastHole){
        console.log('repeated Hole')
        getRandomHole();
    }
    return num;
}

