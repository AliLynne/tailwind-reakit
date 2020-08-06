import React from 'react';
import { Button, Box, useToolbarState } from 'reakit';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const toolbar = useToolbarState({ loop: true });

  return (
    <div className="container h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
      <a id="skip-nav" href="#main-content" className="sr-only">
        Skip to Content
      </a>
      <Header title="My Title" toolbar={toolbar} />
      <Box as="main" id="main-content" className="flex-grow p-3">
        <p>Main Content Should Go Here</p>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
