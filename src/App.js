import React from 'react';
import { Box, useToolbarState } from 'reakit';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Header from './components/Header';
import Footer from './components/Footer';
import Sample from './components/Sample';

function App() {
  const toolbar = useToolbarState({ loop: true });
  const appTitle = 'Application Title';
  return (
    <Router>
      <div className="h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <a id="skip-nav" href="#main-content" className="sr-only">
          Skip to Content
        </a>
        <Header title={appTitle} toolbar={toolbar} />
        <Box as="main" id="main-content" className="flex-grow p-3">
          <Switch>
            <Route path="/component1">
              <Component1 />
            </Route>
            <Route path="/component2">
              <Component2 />
            </Route>
            <Route path="/component3">
              <Component3 />
            </Route>
          </Switch>
        </Box>
        <Footer title={appTitle} toolbar={toolbar} />
      </div>
    </Router>
  );
}

export default App;
