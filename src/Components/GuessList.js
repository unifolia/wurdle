import React from "react";

const GuessList = ({ guessList }) => {
    return (
        <>
            {guessList.map((guess, guessNumber) => {
                const guessId = guessNumber.toString();
                
                return (
                    <div key={`guess${guessNumber}`}>
                        {guess.map((letter, letterNumber) => {
                            return (
                                <span 
                                    key={guessId + letterNumber + letter} 
                                    id={guessId + letterNumber + letter} 
                                    className="letter"
                                >
                                    {letter}
                                </span>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
};

export default GuessList