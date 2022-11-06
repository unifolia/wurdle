import React, { useEffect, useState } from 'react';
import Input from './Input';
import GuessList from './GuessList';
import Keyboard from './Keyboard';

import './Wordle.css';
import words from './words';
import compareWords from './compareWords';

const Wordle = () => {
    const wordList = words;
    const [wordle, setWordle] = useState([]);
    const [currentGuess, setCurrentGuess] = useState([]);
    const [guessList, updateGuessList] = useState([]);
    const [guessNumber, setGuessNumber] = useState(0);
    const [win, setResults] = useState(false);

    // Set Wordle
    useEffect(() => {
        setWordle(wordList[Math.floor(Math.random() * wordList.length)].split(''));
    }, [])

    // Compare guess to Wordle
    useEffect(() => {
        console.log(wordle);
        compareWords(wordle, currentGuess, guessNumber, setGuessNumber, setResults);
    }, [guessList])

   return (
        <>
            <Input guessNumber={guessNumber} setGuessNumber={setGuessNumber} updateGuessList={updateGuessList} setCurrentGuess={setCurrentGuess}/>
            {win === true && <h2 className="center">You win :)</h2>}

            {guessNumber >= 5 && 
                <h1 className='answer center'>The word was ~ {wordle.join('')} ~ 
                    <button onClick={() => window.location.reload()} className="refresh">
                        refresh 🤹
                    </button>
                </h1>}
            <GuessList guessList={guessList} />
            <Keyboard />
        </>
   ) 
}

export default Wordle;