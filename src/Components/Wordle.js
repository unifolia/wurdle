import React, { useEffect, useState } from 'react';
import Input from './Input';
import GuessList from './GuessList';
import Keyboard from './Keyboard';

import words from './words';
import compareWords from './compareWords';

import '../styles/style.css';

const Wordle = () => {
    const wordList = words;
    const [wordle, setWordle] = useState([]);
    const [guessList, updateGuessList] = useState([]);
    const [guessNumber, setGuessNumber] = useState(0);
    const [win, setResults] = useState(false);

    useEffect(() => {
        setWordle(wordList[Math.floor(Math.random() * wordList.length)].split(''));
    }, []);

    useEffect(() => {
        if (guessList.length) {
            compareWords(wordle, guessList[guessList.length - 1], guessNumber, setGuessNumber, setResults);
        }
    }, [guessList]);

   return (
        <>
            <Input guessNumber={guessNumber} setGuessNumber={setGuessNumber} updateGuessList={updateGuessList}/>
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
   );
};

export default Wordle;