import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Header = ({ children }) => {
  return <Box>{children}</Box>;
};

Header.propTypes = {
  children: PropTypes.oneOf([PropTypes.array, PropTypes.element]).isRequired,
};

export default Header;
