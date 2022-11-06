import React, { useEffect, useState } from "react";

const Input = ({ guessNumber, setGuessNumber, updateGuessList, setCurrentGuess }) => {
    
    const submitGuess = e => {
        e.preventDefault();
        const currentGuess = e.target[0].value.toLowerCase().split('');

        setCurrentGuess(currentGuess);
        updateGuessList(guessList => [...guessList, currentGuess]);
        setGuessNumber(guessNumber + 1);
    }

    return (
        <form onSubmit={submitGuess}>
            <input type="text" maxLength="5" />
            <button disabled={guessNumber >= 5 ? true : false}>
                Submit :)
            </button>
        </form>
    )
}

export default Input;