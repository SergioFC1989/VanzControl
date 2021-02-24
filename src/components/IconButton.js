import { Box, ThemeContext } from 'grommet';
import PropTypes from 'prop-types';
import React from 'react';

import RoutedButton from './RoutedButton';

const IconButton = ({ icon: Icon, ...props }) => (
  <ThemeContext.Extend
    value={{
      button: {
        primary: { padding: 'small' },
        secondary: { padding: 'small' },
        default: { padding: 'small' },
      },
    }}
  >
    <Box
      flex={false}
      round="full"
      overflow="hidden"
    >
      <RoutedButton icon={Icon} {...props} />
    </Box>
  </ThemeContext.Extend>
);

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
};

export default IconButton;
