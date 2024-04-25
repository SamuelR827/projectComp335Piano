import React, { useState } from 'react';
// https://tonejs.github.io/
import * as Tone from 'tone'

// setup sound synth from tone.js
const synth = new Tone.Synth({
  envelope: {
    attack: 0.01,
    decay: 0.1,
    sustain: 0.3,
    release: 1
  }
}).toDestination();

// function for each key
function Key({ value, onKeyClick, isBlack, isPressed}) {
  return (
    // return button is black or not, or pressed or not
    <button className={`key ${isBlack ? 'black' : ''} ${isPressed ? 'pressed': ''}`} 
    onClick={onKeyClick}>
      {value}
    </button>
  );
}

// Main function
function Piano({ keys }) {
    // addkey down event for keyboard press
    window.addEventListener("keydown", pianoKeyboard)
    // keyboard state -> handles highlights of keys, starts as empty
    const [pressedKeyIndex, setPressedKeyIndex] = useState(null);

  // handeClick of each individual key by getting index
  const keyPress = (keyIndex) => {
    setPressedKeyIndex(keyIndex);
    if (keyIndex === 0){
        console.log("c3 key pressed");
        synth.triggerAttackRelease("C3", "8n");
    }
    else if (keyIndex === 1){
        console.log("c#3 key pressed")
        synth.triggerAttackRelease("C#3", "8n");
    }
    else if (keyIndex === 2){
      console.log("d3 key pressed")
      synth.triggerAttackRelease("D3", "8n");
    }
    else if (keyIndex === 3){
      console.log("d#3 key pressed")
      synth.triggerAttackRelease("D#3", "8n");
    }
    else if (keyIndex === 4){
      console.log("e3 key pressed")
      synth.triggerAttackRelease("E3", "8n");
    }
    else if (keyIndex === 5){
      console.log("f3 key pressed")
      synth.triggerAttackRelease("F3", "8n");
    }
    else if (keyIndex === 6){
      console.log("f#3 key pressed")
      synth.triggerAttackRelease("F#3", "8n");
    }
    else if (keyIndex === 7){
      console.log("g3 key pressed")
      synth.triggerAttackRelease("G3", "8n");
    }
    else if (keyIndex === 8){
      console.log("g#3 key pressed")
      synth.triggerAttackRelease("G#3", "8n");
    }
    else if (keyIndex === 9){
      console.log("a4 key pressed")
      synth.triggerAttackRelease("A3", "8n");
    }
    else if (keyIndex === 10){
      console.log("a#4 key pressed")
      synth.triggerAttackRelease("A#3", "8n");
    }
    else if (keyIndex === 11){
      console.log("b4 key pressed")
      synth.triggerAttackRelease("B3", "8n");
    }
    else if (keyIndex === 12){
      console.log("c4 key pressed");
      synth.triggerAttackRelease("C4", "8n");
    }
    else if (keyIndex === 13){
      console.log("c#4 key pressed")
      synth.triggerAttackRelease("C#4", "8n");
    }
    else if (keyIndex === 14){
    console.log("d4 key pressed")
    synth.triggerAttackRelease("D4", "8n");
    }
    else if (keyIndex === 15){
    console.log("d#4 key pressed")
    synth.triggerAttackRelease("D#4", "8n");
    }
    else if (keyIndex === 16){
    console.log("e4 key pressed")
    synth.triggerAttackRelease("E4", "8n");
    }
    else if (keyIndex === 17){
    console.log("f4 key pressed")
    synth.triggerAttackRelease("F4", "8n");
    }
    else if (keyIndex === 18){
    console.log("f#4 key pressed")
    synth.triggerAttackRelease("F#4", "8n");
    }
    else if (keyIndex === 19){
    console.log("g4 key pressed")
    synth.triggerAttackRelease("G4", "8n");
    }
    else if (keyIndex === 20){
    console.log("g#4 key pressed")
    synth.triggerAttackRelease("G#4", "8n");
    }
    else if (keyIndex === 21){
    console.log("a5 key pressed")
    synth.triggerAttackRelease("A4", "8n");
    }
    else if (keyIndex === 22){
    console.log("a#5 key pressed")
    synth.triggerAttackRelease("A#4", "8n");
    }
    else if (keyIndex === 23){
    console.log("b5 key pressed")
    synth.triggerAttackRelease("B4", "8n");
    }
  };

  function pianoKeyboard(event){
    // Key map each key maps to an index
    const keyMap = {
      81: 0, 50: 1, 87: 2, 51: 3, 69: 4, 82: 5, 53: 6, 84: 7, 54: 8, 89: 9,
      55: 10, 85: 11, 73: 12, 57: 13, 79: 14, 48: 15, 80: 16, 219: 17, 187: 18, 
      221: 19, 65: 20, 90: 21, 83: 22, 88: 23
    };
    // get the key index from the map
    const keyIndex = keyMap[event.keyCode];

    // handle not registered keys 
    if (keyIndex !== undefined) {
      //play corresponding key with index
      keyPress(keyIndex);
      }
    }


  // render the piano with all the keys
  return (
    <>
      <div className="piano">
        {/* each key is an element of a list*/}
        <Key value={keys[0]} isPressed={pressedKeyIndex === 0} onKeyClick={() => keyPress(0)} />
        <Key value={keys[1]} isPressed={pressedKeyIndex === 1} isBlack = 'black' onKeyClick={() => keyPress(1)} />
        <Key value={keys[2]} isPressed={pressedKeyIndex === 2} onKeyClick={() => keyPress(2)} />
        <Key value={keys[3]} isPressed={pressedKeyIndex === 3} isBlack = 'black'onKeyClick={() => keyPress(3)} />
        <Key value={keys[4]} isPressed={pressedKeyIndex === 4} onKeyClick={() => keyPress(4)} />
        <Key value={keys[5]} isPressed={pressedKeyIndex === 5} onKeyClick={() => keyPress(5)} />
        <Key value={keys[6]} isPressed={pressedKeyIndex === 6} isBlack = 'black'onKeyClick={() => keyPress(6)} />
        <Key value={keys[7]} isPressed={pressedKeyIndex === 7} onKeyClick={() => keyPress(7)} />
        <Key value={keys[8]} isPressed={pressedKeyIndex === 8} isBlack = 'black'onKeyClick={() => keyPress(8)} />
        <Key value={keys[9]} isPressed={pressedKeyIndex === 9} onKeyClick={() => keyPress(9)} />
        <Key value={keys[10]} isPressed={pressedKeyIndex === 10} isBlack = 'black'onKeyClick={() => keyPress(10)} />
        <Key value={keys[11]} isPressed={pressedKeyIndex === 11} onKeyClick={() => keyPress(11)} />
        
        <Key value={keys[12]} isPressed={pressedKeyIndex === 12} onKeyClick={() => keyPress(12)} />
        <Key value={keys[13]} isPressed={pressedKeyIndex === 13} isBlack = 'black' onKeyClick={() => keyPress(13)} />
        <Key value={keys[14]} isPressed={pressedKeyIndex === 14} onKeyClick={() => keyPress(14)} />
        <Key value={keys[15]} isPressed={pressedKeyIndex === 15} isBlack = 'black'onKeyClick={() => keyPress(15)} />
        <Key value={keys[16]} isPressed={pressedKeyIndex === 16} onKeyClick={() => keyPress(16)} />
        <Key value={keys[17]} isPressed={pressedKeyIndex === 17} onKeyClick={() => keyPress(17)} />
        <Key value={keys[18]} isPressed={pressedKeyIndex === 18} isBlack = 'black'onKeyClick={() => keyPress(18)} />
        <Key value={keys[19]} isPressed={pressedKeyIndex === 19} onKeyClick={() => keyPress(19)} />
        <Key value={keys[20]} isPressed={pressedKeyIndex === 20} isBlack = 'black'onKeyClick={() => keyPress(20)} />
        <Key value={keys[21]} isPressed={pressedKeyIndex === 21} onKeyClick={() => keyPress(21)} />
        <Key value={keys[22]} isPressed={pressedKeyIndex === 22} isBlack = 'black'onKeyClick={() => keyPress(22)} />
        <Key value={keys[23]} isPressed={pressedKeyIndex === 23} onKeyClick={() => keyPress(23)} />
      </div>
    </>
  );
}


export default Piano;
