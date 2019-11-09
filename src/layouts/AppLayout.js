import React from 'react';
import PropTypes from 'prop-types';
import { Grommet } from 'grommet';

import { Header, Main } from '../components';

const AppLayout = ({ children }) => {
  return (
    <Grommet>
      <Header />
      <Main>{children}</Main>
    </Grommet>
  );
};

AppLayout.propTypes = {
  children: PropTypes.oneOf([PropTypes.array, PropTypes.element]).isRequired,
};

export default AppLayout;
