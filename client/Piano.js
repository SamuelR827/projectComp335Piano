import React, { useState } from 'react';
// https://tonejs.github.io/
import * as Tone from 'tone'

// setup sound synth
const synth = new Tone.Synth().toDestination();

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
        synth.triggerAttackRelease("C3", "8n");
    }
    else if (keyIndex === 1){
        console.log("d key pressed")
        synth.triggerAttackRelease("D3", "8n");
    }
    else if (keyIndex === 2){
      console.log("e key pressed")
      synth.triggerAttackRelease("E3", "8n");
    }
    else if (keyIndex === 3){
      console.log("f key pressed")
      synth.triggerAttackRelease("F3", "8n");
    }
    else if (keyIndex === 4){
      console.log("g key pressed")
      synth.triggerAttackRelease("G3", "8n");
    }
    else if (keyIndex === 5){
      console.log("a key pressed")
      synth.triggerAttackRelease("A3", "8n");
    }
    else if (keyIndex === 6){
      console.log("b key pressed")
      synth.triggerAttackRelease("B3", "8n");
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
