import React from 'react';
import Piano from './Piano'; // import piano file

function App() {
  // Define keys list
  const keys = ['C', 'C#\nDd', 'E', 'F', 'G', 'A', 'B']; // example keys to be changed/added

  return (
    <div className="App">
      {/* Render the Piano component with the keys data */}
      <Piano keys={keys} />
    </div>
  );
}

export default App;
