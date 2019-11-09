import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Main = ({ children }) => {
  return <Box>{children}</Box>;
};

Main.propTypes = {
  children: PropTypes.oneOf([PropTypes.array, PropTypes.element]).isRequired,
};

export default Main;
