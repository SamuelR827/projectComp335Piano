import React from 'react';
import Piano from './Piano'; // import piano file

function App() {
  // Define keys list
  const keys = ['Q', '2', 'W', '3', 'E', 'R', '5', 'T', '6', 'Y', '7', 'U', 'I', '9', 'O', '0', 'P', '[', '=', ']', 'A', 'Z', 'S', 'X'];
  return (
    <div className="App">
      {/* Render the Piano component with the keys data */}
      <Piano keys={keys} />
    </div>
  );
}

export default App;