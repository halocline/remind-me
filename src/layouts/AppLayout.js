import React from 'react';
import PropTypes from 'prop-types';
import { Grommet } from 'grommet';

import { Footer, Header, Main } from '../components';
import theme from '../themes/theme';

const MyThemeContext = React.createContext('dark');

const AppLayout = ({ children }) => {
  return (
    <Grommet theme={theme}>
      <MyThemeContext.Provider>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </MyThemeContext.Provider>
    </Grommet>
  );
};

AppLayout.propTypes = {
  children: PropTypes.oneOf([PropTypes.array, PropTypes.element]).isRequired,
};

export default AppLayout;
