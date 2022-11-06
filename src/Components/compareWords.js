const compareWords = (wordle, currentGuess, guessNumber, setGuessNumber, setResults) => {
    
    const addColorClass = (id, matchType, letter) => {
        document.getElementById(id).classList.add(matchType);
        document.getElementById(`${letter}`).classList.add(matchType);
    };

    currentGuess.forEach((letter, i) => {
        const guessId = (guessNumber - 1).toString() + i + letter;

        if (letter === wordle[i]) {
            addColorClass(guessId, 'match', letter);
        } else if (wordle.includes(letter)) {
            addColorClass(guessId, 'inWord', letter);
        } else {
            addColorClass(guessId, 'noMatch', letter);
        };
    });

    if (currentGuess.length > 0 && currentGuess.length === wordle.length && currentGuess.every((v, i) => v === wordle[i])) {
        setGuessNumber(5);
        setResults(true);
    };
};

export default compareWords;