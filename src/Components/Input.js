import React from "react";

const Input = ({ guessNumber, setGuessNumber, updateGuessList }) => {

    const submitGuess = e => {
        e.preventDefault();
        const currentGuess = e.target[0].value.toLowerCase().split('');
        updateGuessList(guessList => [...guessList, currentGuess]);
        setGuessNumber(guessNumber + 1);
    }

    return (
        <form onSubmit={submitGuess} className="center">
            <input type="text" maxLength="5" />
            <button disabled={guessNumber >= 5 ? true : false}>
                Submit :)
            </button>
        </form>
    )
}

export default Input;