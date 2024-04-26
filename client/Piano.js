import React, { useState } from 'react';
import * as Tone from 'tone';
import _ from 'lodash';

const synth = new Tone.Synth({
  envelope: {
    attack: 0.01,
    decay: 0.1,
    sustain: 0.3,
    release: 1
  }
}).toDestination();

function Key({ value, onKeyClick, isBlack, isPressed }) {
  return (
    <button
      className={`key ${isBlack ? 'black' : ''} ${isPressed ? 'pressed' : ''}`}
      onMouseDown={onKeyClick}
      // added this for improved performance to stop key
      onMouseUp={() => synth.triggerRelease()}
    >
      {value}
    </button>
  );
}

function Piano({ keys }) {
  const [pressedKeyIndex, setPressedKeyIndex] = useState(null);

  const keyPress = (keyIndex) => {
    setPressedKeyIndex(keyIndex);
    const note = getNoteForKeyIndex(keyIndex);
    const now = Tone.now();
    const delay = 0.1; 
    synth.triggerAttackRelease(note, "8n", now + delay);
  };

  // creates a 100ms delay on the pianoKeyboard function for improved performance using lodash
  const debouncedPianoKeyboard = _.debounce(pianoKeyboard, 100, { leading: true, trailing: false });

  window.addEventListener("keydown", debouncedPianoKeyboard);

  function pianoKeyboard(event) {
    const keyMap = {
      81: 0, 50: 1, 87: 2, 51: 3, 69: 4, 82: 5, 53: 6, 84: 7, 54: 8, 89: 9,
      55: 10, 85: 11, 73: 12, 57: 13, 79: 14, 48: 15, 80: 16, 219: 17, 187: 18,
      221: 19, 65: 20, 90: 21, 83: 22, 88: 23
    };
    const keyIndex = keyMap[event.keyCode];
    if (keyIndex !== undefined) {
      keyPress(keyIndex);
    }
  }

  function getNoteForKeyIndex(keyIndex) {
    const noteMap = [
      "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
      "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4"
    ];
    return noteMap[keyIndex];
  }

  return (
    <div className="piano">
      {keys.map((key, index) => (
        <Key
          key={index}
          value={key}
          isPressed={pressedKeyIndex === index}
          isBlack={index === 1 || index === 3 || index === 6 || index === 8 || index === 10 || index === 13 || index === 15 || index === 18 || index === 20 || index === 22}
          onKeyClick={() => keyPress(index)}
        />
      ))}
    </div>
  );
}

export default Piano;
