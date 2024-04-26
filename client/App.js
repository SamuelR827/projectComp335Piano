import React from 'react';
import Piano from './Piano'; // import piano file

function App() {
  // Define keys list
  const keys = ['C\n[Q]', 'C#\nDd\n[2]', 'D\n[W]', 'D#\nEd\n[3]', 'E\n[E]', 'F\n[R]', 'F#\nGd\n[5]', 'G\n[T]', 'G#\nAd\n[6]', 'A\n[Y]', 'A#\nBd\n[7]', 'B\n[U]', 'C\n[I]', 'C#\nDd\n[9]', 'D\n[O]', 'D#\nEd\n[0]', 'E\n[P]', 'F\n([)', 'F#\nGd\n[=]', 'G\n(])', 'G#\nAd\n[A]', 'A\n[Z]', 'A#\nBd\n[S]', 'B\n[X]']; // example keys to be changed/added
  return (
    <div className="App">
      {/* Render the Piano component with the keys data */}
      <Piano keys={keys} />
    </div>
  );
}

export default App;
