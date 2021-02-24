import * as React from 'react';
import { Box, Text } from 'grommet';
import PropTypes from 'prop-types'

const ErrorBox = ({ message }) => ( 
  <Box
    background="status-error"
    pad="small"
    round="xsmall"
  >
    <Text color="white">{message}</Text>
  </Box>
);

ErrorBox.propTypes = {
  message: PropTypes.string,
};

ErrorBox.defaultProps = {
  message: undefined,
};

export default ErrorBox;