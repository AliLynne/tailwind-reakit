import React from 'react';

import { Box } from 'reakit';

import Button from './Button';

const Sample = () => {
  return (
    <Box as="article">
      <header>
        <h2>Article Header</h2>
      </header>
      <p>Article Text</p>
      <h3>Primary Buttons</h3>
      <Button primary="true" formatting="p-3 mr-3">
        Button Text
      </Button>
      <Button secondary="true" formatting="p-3">
        Button Text
      </Button>
    </Box>
  );
};

export default Sample;
