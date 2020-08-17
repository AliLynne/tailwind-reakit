import React from 'react';
import { Button, Clickable, Toolbar, ToolbarItem } from 'reakit';
import { useHistory } from 'react-router-dom';

const Header = ({ title = 'Page Title', toolbar }) => {
  let history = useHistory();
  return (
    <header className="flex justify-between p-3">
      <Clickable as="h1" onClick={() => history.push('/')}>
        {title}
      </Clickable>
      <Toolbar {...toolbar} aria-label="Toolbar">
        <ToolbarItem
          className="px-3"
          as={Button}
          onClick={() => history.push('/component1')}
        >
          Component 1
        </ToolbarItem>
        <ToolbarItem
          className="px-3"
          as={Button}
          onClick={() => history.push('/component2')}
        >
          Component 2
        </ToolbarItem>
        <ToolbarItem
          className="px-3"
          as={Button}
          onClick={() => history.push('/component3')}
        >
          Component 3
        </ToolbarItem>
      </Toolbar>
    </header>
  );
};

export default Header;
