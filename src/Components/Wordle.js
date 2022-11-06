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

    // Set Wordle
    useEffect(() => {
        setWordle(wordList[Math.floor(Math.random() * wordList.length)].split(''));
    }, [])

    // Compare guess to Wordle
    useEffect(() => {
        compareWords(wordle, currentGuess, guessNumber);
    }, [guessList])

   return (
        <>
            <Input guessNumber={guessNumber} setGuessNumber={setGuessNumber} updateGuessList={updateGuessList} setCurrentGuess={setCurrentGuess}/>
            {
                guessNumber >= 5 && 
                <h1 className='answer'>The word was ~ {wordle.join('')} ~ 
                    <button onClick={() => window.location.reload()} className="refresh">
                        refresh 🤹
                    </button>
                </h1>
            }
            <GuessList guessList={guessList} />
            <Keyboard />
        </>
   ) 
}

export default Wordle;