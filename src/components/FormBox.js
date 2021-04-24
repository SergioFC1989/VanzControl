import React from 'react';
import PropTypes from 'prop-types'
import { Box, Heading, Text } from 'grommet';

const FormBox = ({ icon, children, message, textMessage, onSubmit, ...props}) => {
  return(
    <>
      <Box justify="center" align="center" direction="row">
        <Heading textAlign="center">{message}</Heading>
      </Box>
      <Text textAlign="center">{textMessage}</Text>
      <form onSubmit={onSubmit}>
        <Box align="center" {...props}>
          {children}
        </Box>
      </form>
    </>
  )
};

FormBox.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string,
};

FormBox.defaultProps = {
  gap: "medium",
  justify: "center", 
  flex: false,
  margin: 'xxsmall',
  round: 'small',
}

export default FormBox;