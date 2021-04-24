import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Body = ({children, background, ...props}) => (
  <Box 
    background="#F7F7F7"
    align="center"
    justify="center"
    {...props}
  >
    {children}
  </Box>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body;