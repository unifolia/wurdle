import React from "react";

const Keyboard = () => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map((letter) => {
        return letter.toLowerCase();
    });

    return (
        <div className="alphabetList">
            {alphabet.map(letter => {
                return (
                    <span key={letter} id={letter} className="alphabet">{letter}</span>
                )
            })}
        </div>
    )
};

export default Keyboard;