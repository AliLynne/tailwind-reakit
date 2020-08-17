import React from 'react';
import { Clickable, Toolbar, ToolbarItem, useToolbarState, Button } from 'reakit'
import { useHistory } from 'react-router-dom'

const Footer = ({title, toolbar}) => {
  const history = useHistory()
  return (
    <footer className="p-3 flex justify-between">
    <Clickable as="p" onClick={() => history.push('/')}>
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
    </footer>
  );
};

export default Footer;
