import React, { useState } from 'react';
import { TextInput, Button, RoutedButton } from 'grommet';

import Body from '../../../components/Body';
import HeaderComp from '../../../components/HeaderComp' 
import Frame from '../../../components/Frame' 
import FormBox from '../../../components/FormBox'

const Login = () => { 
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  return(
    <>
      <Body>  
        <HeaderComp>        
          <Frame>
            <FormBox message="Inicie Sesión">
              <TextInput 
                size="large"
                aria-label="Usuario"
                placeholder="Usuario"
                value={user}
                onChange={event => setUser(event.target.value)}
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
              <RoutedButton label="¿Aún no está registrado?" href="/register" />
            </FormBox>
          </Frame>
        </HeaderComp>
      </Body>
    </>
  )
};
export default Login;