import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const HeaderComp = ({children, ...props}) => {
  return(
  <Box
    height="small"
    fill="horizontal"
    round="0 0 15% 15%"
    align="center"
    pad="small"   
    background="linear-gradient(to top, #7575B6, #8282BF)"
    {...props}
  > 
    {children}
  </Box>
  )
};

HeaderComp.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeaderComp;