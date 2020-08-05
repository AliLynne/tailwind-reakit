import React from 'react';
import { Button } from 'reakit';

function App() {
  return (
    <div className="container bg-purple-400 h-screen flex flex-col">
      <a id="skip-nav" href="#main-content" className="sr-only">
        Skip to Content
      </a>
      <header>
        <h1>Page Title</h1>
        <nav>
          <Button onClick={() => console.log('click!')}>
            Nav Button
          </Button>
        </nav>
      </header>
      <main id="main-content" className="flex-grow">
        <p>Main Content Should Go Here</p>
      </main>
      <footer>
        <p>Footer Content Should Go Here</p>
      </footer>
    </div>
  );
}

export default App;
