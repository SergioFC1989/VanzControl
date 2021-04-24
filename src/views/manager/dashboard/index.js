import React from 'react';
import Vans from './vans/index'
import { Tabs, Text, Heading, Button, Tab,  } from 'grommet';
import { Car, UserAdd, AddCircle, Database, Alert,  } from 'grommet-icons'

const dashboardManager = () => {

  return(
    <>
      <Tabs flex={true}>
        <Tab icon={<Car />} title="Vehículos">
          <Tabs alignSelf="start" margin="medium">
            <Tab icon={<AddCircle />} title="Nuevo"><Vans /></Tab>
            <Tab icon={<Database />} title="Consulta"></Tab>
            <Tab icon={<Alert />} title="Averías"></Tab>
            <Tab icon={<UserAdd />} title="Asignar"></Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </>
  )
};

export default dashboardManager;