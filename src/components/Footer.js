import React from 'react';
import { Box, CheckBox } from 'grommet';

const Footer = () => (
  <Box direction="row" border="all" gap="large" pad="large">
    Footer
    <Box direction="row" fill justify="end">
      <CheckBox label="View Mode" toggle />
    </Box>
  </Box>
);

export default Footer;
