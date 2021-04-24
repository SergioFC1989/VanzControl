import React from 'react';
import { useForm } from 'react-hook-form'
import { 
  TextArea,
  TextInput, 
  Box, 
  Button,
  FormField,
} from 'grommet';

import Body from '../../../../components/Body';
import FormBox from '../../../../components/FormBox';
import Frame from '../../../../components/Frame';
import ErrorBox from '../../../../components/ErrorBox'
import InputFile from '../../../../components/InputFile'

  const Vans = () => { 
  const { formState:{errors}, handleSubmit, register } = useForm()
  const errorsValidations = Object.keys(errors)
  const newVans = data => console.log(data)
  
  return (
    <>
      <Body>
        <Frame background="#F7F7F7" pad="medium">
          <FormBox 
            message="Nuevo registro de vehículo" 
            background="white" 
            pad="small"
            onSubmit={handleSubmit(newVans)}
          >
            {errorsValidations.length > 0 && (
              <ErrorBox
                message={errorsValidations.map(e => <li>· El campo {e.toUpperCase()} no puede estar vacío</li>)}
              />
            )}
            <FormField fill="horizontal" label="Matricula *">
              <TextInput
                {...register("matricula", {required: true})}
              />
            </FormField>
            <FormField fill="horizontal" label="Marca *">
              <TextInput 
                {...register("marca", {required: true})}
              />
            </FormField>
            <FormField fill="horizontal" label="Modelo *">
              <TextInput 
                {...register("modelo", {required: true})}
              />
            </FormField>
            <FormField fill="horizontal" label="Kilómetros *">
              <TextInput
                type="number" 
                {...register("kilometros", {required: true})}
              />
            </FormField>
            <InputFile 
              message="Imagen frontal" 
              id="img-frontal"
            />
            <InputFile 
              message="Imagen lateral derecha" 
              id="img-lateral-derecha"
            />
            <InputFile 
              message="Imagen trasera" 
              id="img-trasera"
            />
            <InputFile 
              message="Imagen lateral izquierda"
              id="img-lateral-izquierda"
            />
            <TextArea
              resize="vertical"
              placeholder="Otras observaciones: limpieza, defectos interiores..."
              {...register("obseravaciones", {required: false})}
            />
            <Box width="medium" margin="medium" justify="center">
              <Button primary size="large" type="submit" label="Aceptar" />
            </Box>
          </FormBox>
        </Frame>
      </Body>
    </>
  )
};
export default Vans;