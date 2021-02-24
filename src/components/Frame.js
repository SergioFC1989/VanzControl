import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Frame = ({ children, icon, ...props }) => {
  return(
    <Box {...props}>
      {children}
    </Box>
  )
};

Frame.propTypes = {
  children: PropTypes.node.isRequired,
}

Frame.defaultProps = {
  direction: "column",
  margin: "xsmall",
  fill: "horizontal",
  alignContent: "center",
  round: "small",
  background: "#FFFFFF",
  gap: "large",
  pad: "medium",
  flex: false,
}

export default Frame;

