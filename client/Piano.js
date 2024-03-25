import React, { useState } from 'react';

// function for each key
function Key({ value, onKeyClick, isBlack }) {
  {/* Added a field for the black keys style To be Implemented */}
  return (
    <button className={`key ${isBlack ? 'black' : ''}`} onClick={onKeyClick}>
      {value}
    </button>
  );
}

// Main function
function Piano({ keys }) {
  // handeClick of each individual key by getting index
  const handleClick = (keyIndex) => {
    // TODO Add sound to play, need to figure out how to do that
    console.log(`Key ${keyIndex} clicked`);
  };

  // render the piano with all the keys
  return (
    <>
      <div className="piano">
        {/* each key is an element of a list */}
        <Key value={keys[0]} isBlack = 'black' onKeyClick={() => handleClick(0)} />
        <Key value={keys[1]} onKeyClick={() => handleClick(1)} />
        <Key value={keys[2]} onKeyClick={() => handleClick(2)} />
      </div>
    </>
  );
}

export default Piano;
