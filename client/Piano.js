import React, { useState } from 'react';

const c_note = new Audio("sounds/c3.mp3")
const d_note = new Audio("sounds/d3.mp3")
const e_note = new Audio("sounds/e3.mp3")
const f_note = new Audio("sounds/f3.mp3")
const g_note = new Audio("sounds/g3.mp3")
const a_note = new Audio("sounds/a4.mp3")
const b_note = new Audio("sounds/b4.mp3")


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
    // Sounds found from Reddit user SingleInfinity
    // https://www.reddit.com/r/piano/comments/3u6ke7/heres_some_midi_and_mp3_files_for_individual/

  // handeClick of each individual key by getting index
  const handleClick = (keyIndex) => {
    // TODO Add sound to play, need to figure out how to do that
    if (keyIndex === 0){
        console.log("c key pressed");
        c_note.play()
    }
    else if (keyIndex === 1){
        console.log("d key pressed")
        d_note.play()
    }
    else if (keyIndex === 2){
      console.log("e key pressed")
      e_note.play()
    }
    else if (keyIndex === 3){
      console.log("f key pressed")
      f_note.play()
    }
    else if (keyIndex === 4){
      console.log("g key pressed")
      g_note.play()
    }
    else if (keyIndex === 5){
      console.log("a key pressed")
      a_note.play()
    }
    else if (keyIndex === 6){
      console.log("b key pressed")
      b_note.play()
    }
  };

  // render the piano with all the keys
  return (
    <>
      <div className="piano">
        {/* each key is an element of a list */}
        <Key value={keys[0]} onKeyClick={() => handleClick(0)} />
        <Key value={keys[1]} onKeyClick={() => handleClick(1)} />
        <Key value={keys[2]} onKeyClick={() => handleClick(2)} />
        <Key value={keys[3]} onKeyClick={() => handleClick(3)} />
        <Key value={keys[4]} onKeyClick={() => handleClick(4)} />
        <Key value={keys[5]} onKeyClick={() => handleClick(5)} />
        <Key value={keys[6]} onKeyClick={() => handleClick(6)} />
      </div>
    </>
  );
}

export default Piano;
