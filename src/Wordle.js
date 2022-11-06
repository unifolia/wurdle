import React, { useEffect, useState } from 'react';
import Input from './Components/Input';
import GuessList from './Components/GuessList';
import Keyboard from './Components/Keyboard';

import words from './Components/words';
import compareWords from './Components/compareWords';

import './styles/style.css';

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
            <h1 className='center'>wurdle</h1>

            <Input guessNumber={guessNumber} setGuessNumber={setGuessNumber} updateGuessList={updateGuessList}/>
            {win === true && <h2 className="center">You win :)</h2>}

            {guessNumber >= 6 && 
                <h2 className='answer center'>The word was ~ {wordle.join('')} ~ 
                    <button onClick={() => window.location.reload()} className="refresh">
                        refresh 🔄
                    </button>
                </h2>}
            <GuessList guessList={guessList} />
            <Keyboard />
        </>
   );
};

export default Wordle;