import React, { useState } from 'react';
import { TextArea, Button, Text, Box } from 'grommet';

import { FormPreviousLink, Camera } from 'grommet-icons';

import Body from '../../components/Body';
import HeaderComp from '../../components/HeaderComp' 
import Frame from '../../components/Frame' 
import FormBox from '../../components/FormBox'
import RoundButton from '../../components/RoundButton';

const Failure = () => { 
  const [description, setDescription] = useState('')
  return(
    <>
      <Body>  
        <HeaderComp>        
          <Frame>
            <RoundButton icon={<FormPreviousLink alignmentBaseline="central" size="large" color="white" />} to="/start_shift"/>
              <FormBox gap="xlarge" message="Averías">
                <Box gap="medium">
                  <Text>Indique la descripcion de la avería</Text>
                  <TextArea
                    resize={false}
                    size="large"
                    value={description}
                    onChange={event => setDescription(event.target.value)}  
                  />
                  <Button secondary label="Subir imágen" icon={<Camera />} />
                </Box>
                <Button primary fill="horizontal" size="large" label="Informar" />     
              </FormBox>
          </Frame>
        </HeaderComp>
      </Body>
    </>
  )
};
export default Failure;