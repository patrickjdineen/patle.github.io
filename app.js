const keyboard = document.querySelector('.keyboard-container')
const gameboard = document.querySelector('.guess-container')

let rowIndex = 0;
let letterIndex = 0;

const gameWord = 'SUPER'

const gameRows = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
];
gameRows.forEach((row, rowIndex) =>{
    const guessRow = document.createElement('div');
    guessRow.classList = 'guess-row';
    guessRow.setAttribute('id',`guess${rowIndex}`);
    row.forEach((letter, letterIndex)=>{
        const guessLetter = document.createElement('div');
        guessLetter.setAttribute('id',`guess${rowIndex}-letter${letterIndex}`);
        guessRow.append(guessLetter);
    });
    gameboard.append(guessRow);
})

const alpha = [
    'Q','W','E','R','T','Y','U','I','O','P',
    'A','S','D','F','G','H','J','K','L',
    'Ent','Z','X','C','V','B','N','M','Del'
];
alpha.forEach(key => {
    const keyTile = document.createElement('button');
    keyTile.textContent = key;
    keyTile.addEventListener('click',() => handleClick(key))
    keyTile.setAttribute('id',key)
    keyboard.append(keyTile);
});

const handleClick = (key) => {
    if(key == 'Ent'){
        checkWord()
    } else if (key == 'Del'){
        delLetter()
    }else {
        addLetter(key) 
    }
};

const addLetter = (key) =>{
    if(letterIndex > 4){
        return
    }else {
        const tile = document.getElementById(`guess${rowIndex}-letter${letterIndex}`)
        gameRows[rowIndex][letterIndex] = key;
        tile.textContent = key
        letterIndex ++
    }
};
    
const checkWord = () => {
    if(letterIndex < 4){
        return
    } else {
        const sample = gameRows[rowIndex].join('');
        console.log(`word to eval is ${sample}`)
        if(sample == gameWord){
            console.log('WINNNNNNN')
        } else{
            console.log('LOSER')
            rowIndex ++
            letterIndex = 0
        }
    }
};

const delLetter = () => {
    if (letterIndex > 0){
        letterIndex --
        const tile = document.getElementById(`guess${rowIndex}-letter${letterIndex}`)
        gameRows[rowIndex][letterIndex] = ''
        tile.textContent = ''
    }
};