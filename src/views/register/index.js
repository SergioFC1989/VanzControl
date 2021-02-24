import React, { useState } from 'react';
import { TextInput, Button, RoutedButton } from 'grommet';

import Body from '../../components/Body';
import HeaderComp from '../../components/HeaderComp' 
import Frame from '../../components/Frame' 
import FormBox from '../../components/FormBox'

const Register = () => { 
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return(
    <>
      <Body>  
        <HeaderComp>        
          <Frame>
            <FormBox message="Regístrese">
              <TextInput 
                size="large"
                aria-label="Correo electrónico"
                placeholder="Correo electrónico"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <TextInput 
                size="large"
                type="password"
                aria-label="Contraseña"
                placeholder="Contraseña" 
                value={pass}
                onChange={event => setPass(event.target.value)}
              />
              <Button
                fill
                primary
                label="Aceptar"
                size="large"
              />
              <RoutedButton label="Inicie sesión" href="/login" />
            </FormBox>
          </Frame>
        </HeaderComp>
      </Body>
    </>
  )
};
export default Register;