import React, { useState } from "react";

const Input = ({ guessNumber, setGuessNumber, updateGuessList }) => {
    const [inputVal, updateInput] = useState('');

    const onInput = userInput => {
        if (userInput.match(/^[A-Za-z]+$/)) {
            updateInput(userInput);
        };
    };

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
            <input type="text" maxLength="5" value={inputVal} onInput={(event) => {
                onInput(event.target.value)}} 
            />
            <button disabled={guessNumber >= 5 ? true : false}>
                Submit :)
            </button>
        </form>
    );
};

export default Input;