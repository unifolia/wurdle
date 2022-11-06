const compareWords = (wordle, currentGuess, guessNumber) => {
    const guessId = (guessNumber - 1).toString();
    
    const addColorClass = (id, matchType) => {
        document.getElementById(id).classList.add(matchType);
    }

    currentGuess.forEach((letter, i) => {
        if (letter === wordle[i]) {
            addColorClass(guessId + i + letter, 'match');
        } else if (wordle.includes(letter)) {
            addColorClass(guessId + i + letter, 'inWord');
        } 
    })
};

export default compareWords;