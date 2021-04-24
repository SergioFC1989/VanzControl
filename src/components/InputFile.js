import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Box, FormField, Text } from 'grommet';
import { Attachment } from 'grommet-icons';

const InputFile = ({ message, id }) => {
  const [file, setFile] = useState(null)
  const onSelectedFile = () => setFile(document.getElementById(`${id}`).value)
  return(
    <>
      <Box
        fill="horizontal"
        width="large"
        margin="small"
      >
        <FormField pad={true} label={
          <Box 
            direction="row" 
            gap="xsmall" 
            justify="start"
            style={{'cursor':'pointer'}} 
          >
            <Attachment />
              <Text >{message}</Text>
          </Box>
        }htmlFor={id}>
          <Text textAlign="start" weight="bold">{file}</Text>
        </FormField>
      <input 
        accept=".png, .jpg, .jpeg" 
        type="file" 
        id={id}
        onChange={onSelectedFile}
        hidden 
      />
      </Box>
    </>
  )
};
InputFile.propTypes = {
  message: PropTypes.string,
  id: PropTypes.string,
}
export default InputFile;