import React from 'react';
import { Box, Markdown } from 'grommet';
import Frame from '../../components/Frame';
import Body from '../../components/Body';
import BoxDescription from '../../components/Box-Description';
import Task from '../../images/Task.png'
import CoWorker from '../../images/CoWorker.png'

const Main = () => {
  return(
    <>
      <Body width="xxlarge">
        <Frame width="xlarge">
          <Box
            align="center"
            gap="medium"
            width="xxlarge"
          >
            <BoxDescription 
              title="¿Eres un conductor?"
              message={
                <Markdown>
                  Accede a tu espacio personal como **conductor**. 
                  Aquí podrás ver los vehículos asignados y el 
                  estado del mismo.
                </Markdown>
              }
              to="/start_shift"
              label="Accede"
              src={Task}
            />
            <BoxDescription 
              title="¿Eres un responsable?"
              message={
                <Markdown>
                  Accede a tu espacio personal como **responsable** 
                  de gestión de vehículos. Aquí podrás asignar 
                  vehículos a los conductores e informar del 
                  estado de los mismos.
                </Markdown>
              }
              to="/manager/dashboard"
              label="Accede"
              src={CoWorker}
            />
          </Box>
        </Frame>  
      </Body>  
    </>
  )
};

export default Main;