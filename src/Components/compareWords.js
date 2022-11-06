const compareWords = (wordle, currentGuess, guessNumber, setGuessNumber, setResults) => {
    const guessId = (guessNumber - 1).toString();
    
    const addColorClass = (id, matchType, letter) => {
        document.getElementById(id).classList.add(matchType);
        document.getElementById(`${letter}`).classList.add(matchType);
    };

    currentGuess.forEach((letter, i) => {
        if (letter === wordle[i]) {
            addColorClass(guessId + i + letter, 'match', letter);
        } else if (wordle.includes(letter)) {
            addColorClass(guessId + i + letter, 'inWord', letter);
        };
    });

    if (currentGuess.length > 0 && currentGuess.length === wordle.length && currentGuess.every((v, i) => v === wordle[i])) {
        setGuessNumber(5);
        setResults(true);
    }
};

export default compareWords;