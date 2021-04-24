import React from 'react';
import { Box, Heading, Image, Text } from 'grommet';
import RoutedButton from './RoutedButton'

const BoxDescription = ({ border, title, small, src, message, to, label }) => {
  return(
    <Box
      pad="small"
      justify="center"
      width="medium"
      round="xsmall"
      margin="medium"
      background="white"
      border={border}
    >
    <Heading textAlign="center" level="2">{title}</Heading>
    <Box>
      <Image margin={small} fit="cover" src={src} />
    </Box>
    <Text>{message}</Text>
    <RoutedButton to={to} label={label} margin="medium" primary />
  </Box>
  )
};

BoxDescription.defaultProps= {
  border:{
    color: "#F7F7F7",
    size: "medium",
    round: "medium"
  }
};

export default BoxDescription;