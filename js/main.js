const holesNumber = 6;
let currentHole;
const grid = document.getElementById('grid');
let characterStatus = "hungry"; 
for(let i = 0; i < holesNumber; i++){
    const container = document.createElement('div');
    container.className = 'container';
    
    const blackHole = document.createElement('img');
    blackHole.src = './assets/balckhole.png';
    blackHole.alt = '';
    blackHole.className = 'blackhole rotate';

    const div = document.createElement('div');
    div.className = "holder"
    div.id = `${i}`;

    container.appendChild(blackHole);
    container.appendChild(div);
    grid.appendChild(container);
}

function getRandomHole(){
    let num = Math.floor(Math.random() * holesNumber);
    let lastHole = num;
    if(lastHole){
        console.log('repeated Hole')
        getRandomHole();
    }
    return num.toString();
}


function setCharacter(){
    
        const character = document.createElement('img');
        character.src = './assets/hungry.png';
        character.alt = '';
        character.className = 'character';
        character.style.transform = 'scale(0)';
        characterStatus = "hungry"
        let num = getRandomHole();
        currentHole = document.getElementById(num);
        
        currentHole.appendChild(character);
        character.style.transform = 'scale(1)';
        
        
        const holder = document.querySelector('.holder img')
        
        
        character.addEventListener('click', ()=>{
            const progress = document.getElementById('progress')
            let width1 = 0;
            if(characterStatus === "hungry"){
                width1 += 4
                progress.style.width = width1 + "%";
                character.src = "./assets/success.png";
                characterStatus = "fed";
            }
        });

        setTimeout(()=>{
            if(characterStatus === "hungry"){
                character.src = "./assets/fail.png";
                characterStatus = "sad"; 
            }
        },2000)
        setTimeout(()=>{
            character.src = "./assets/back.png";
        }, 2500);
        setTimeout(()=>{
            holder.remove();
            console.log('deleted');
        },2800) 
    
    
}


window.onload = setInterval(setCharacter, 2000);

