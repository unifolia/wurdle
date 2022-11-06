const compareWords = (wordle, currentGuess, guessNumber) => {
    const guessId = (guessNumber - 1).toString();
    
    const addColorClass = (id, matchType, letter) => {
        if (document.getElementById(id)) {
            document.getElementById(id).classList.add(matchType);
        }

        if (document.getElementById(`${letter}`)) {
            document.getElementById(`${letter}`).classList.add(matchType);
        };
    };

    currentGuess.forEach((letter, i) => {
        if (letter === wordle[i]) {
            addColorClass(guessId + i + letter, 'match', letter);
        } else if (wordle.includes(letter)) {
            addColorClass(guessId + i + letter, 'inWord', letter);
        };
    });
};

export default compareWords;