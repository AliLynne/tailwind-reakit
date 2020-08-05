import React from 'react';
import { Button } from 'reakit';

function App() {
  return (
    <>
      <a id="skip-nav" href="#main-content" className="sr-only">
        Skip to Content
      </a>
      <header>
        <h1>Page Title</h1>
        <nav>
          <Button onClick={() => console.log('click!')}>
            Reakit Button
          </Button>
        </nav>
      </header>
      <main id="main-content">
        <p>Main Content Should Go Here</p>
      </main>
      <footer>
        <p>Footer Content Should Go Here</p>
      </footer>
    </>
  );
}

export default App;
