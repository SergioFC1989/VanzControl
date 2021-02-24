import { Box, RangeInput, Text } from 'grommet';
import React from 'react';

const Range = ({textRange, ...props}) => (
  <Box margin="medium" gap="medium">
    <Text size="large" textAlign="center">{textRange}</Text>
    <RangeInput {...props} />
  </Box>
);

export default Range;