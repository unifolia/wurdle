import React from "react";

const GuessList = ({ guessList }) => {
    return (
        <main>
            {guessList.map((guess, guessNumber) => {
                const guessId = guessNumber.toString();
                
                return (
                    <div key={`guess${guessNumber}`} className="word">
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
        </main>
    )
};

export default GuessList