import React from 'react';
import { Button, Toolbar, ToolbarItem } from 'reakit';

const Header = ({ title = 'Page Title', toolbar }) => {
  return (
    <header className="flex justify-between p-3">
      <h1>{title}</h1>
      <Toolbar {...toolbar}>
        <ToolbarItem
          as={Button}
          className="px-3"
          onClick={() => alert('click!')}
        >
          Nav Button 1
        </ToolbarItem>
        <ToolbarItem
          as={Button}
          className="px-3"
          onClick={() => alert('click!')}
        >
          Nav Button 2
        </ToolbarItem>
        <ToolbarItem
          as={Button}
          className="px-3"
          onClick={() => alert('click!')}
        >
          Nav Button 3
        </ToolbarItem>
      </Toolbar>
    </header>
  );
};

export default Header;
