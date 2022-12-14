import React from "react";

const Input = ({ guessNumber, setGuessNumber, updateGuessList }) => {
    
    const submitGuess = e => {
        e.preventDefault();
        const formInput = e.target[0];

        if (formInput.value) {
            const currentGuess = formInput.value.toLowerCase().split('');
            
            updateGuessList(guessList => [...guessList, currentGuess]);
            setGuessNumber(guessNumber + 1);
    
            e.target.reset();
            formInput.focus();
        };
    };

    return (
        <form onSubmit={submitGuess} className="center">
            <input type="text" maxLength="5" pattern="[A-Za-z]+" title="Please use letters"/>
            <button disabled={guessNumber >= 6 ? true : false}>
                Submit 📚
            </button>
        </form>
    );
};

export default Input;