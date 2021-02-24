import React from 'react';
import { Box } from 'grommet';
import RoutedButton from './RoutedButton';

const RoundButton = ({ icon, to, ...props }) => (
  <>
    <Box 
      round="xlarge"
      background="brand"
      pad="medium"
      align="center"
      width="xxsmall"
      height="xxsmall"
    >
      <Box align="center" justify="center">
        <RoutedButton
          icon={icon}
          to={to} 
          {...props}
          />
      </Box>
    </Box>
  </>
);

export default RoundButton;