import { Box, Text } from 'grommet';
import React from 'react';

const ListItem = ({textKey, textValue, ...props}) => (
  <Box direction="row" alignContent="center" gap="large" margin="small" {...props}>
    <Box width="large"><Text textAlign="center" size="large" weight="bold">{textKey}</Text></Box>
    <Box width="large"><Text textAlign="center" size="large">{textValue}</Text></Box>
  </Box>
);

export default ListItem;