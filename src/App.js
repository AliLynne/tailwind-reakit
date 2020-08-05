import React from 'react';
import { Button } from 'reakit';

function App() {
  return (
    <div className="App">
      <header>
        <Button onClick={() => console.log('click!')}>
          Reakit Button
        </Button>
      </header>
    </div>
  );
}

export default App;
