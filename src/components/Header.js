import React from 'react';
import { Box, Button } from 'grommet';

const Header = () => {
  return (
    <Box
      direction="row"
      align="center"
      border="all"
      fill
      gap="large"
      pad={{ horizontal: 'large', vertical: 'medium' }}
    >
      <Box direction="row">
        <div>Logo</div>
      </Box>
      <Box direction="row" align="center" fill gap="large" justify="end">
        <Box direction="row" gap="medium">
          <a href="/cube">Cube</a>
          <a href="/">Home</a>
        </Box>
        <Box direction="row" gap="medium">
          <Button label="click me" />
          <Button label="no, click me" />
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
