import React, { useEffect, useState } from 'react';
import Input from './Input';
import GuessList from './GuessList';
import compareWords from './compareWords';
import words from './words';
import './Wordle.css';

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
        console.log(wordle);
        compareWords(wordle, currentGuess, guessNumber);
    }, [guessList])

   return (
        <>
            <Input guessNumber={guessNumber} setGuessNumber={setGuessNumber} updateGuessList={updateGuessList} setCurrentGuess={setCurrentGuess}/>
            <GuessList guessList={guessList} />
        </>
   ) 
}

export default Wordle;