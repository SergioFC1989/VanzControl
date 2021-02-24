import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormPreviousLink } from 'grommet-icons';
import { CircleInformation } from 'grommet-icons';
import { 
  TextInput, 
  Box, 
  Text, 
  Button, 
  Collapsible, 
  Card, 
  CardBody, 
  DataTable,
  Layer,
  Carousel, 
  Image,
  Select} from 'grommet';
import { optionsStartShift } from '../../services/service'
import errorFirebase from '../../services/firebase/error'
import getCollections from '../../services/firebase/getCollections'

import Body from '../../components/Body'
import HeaderComp from '../../components/HeaderComp'
import Frame from '../../components/Frame'
import FormBox from '../../components/FormBox'
import ListItem from '../../components/ListItems'
import Range from '../../components/Range';
import RoutedButton from '../../components/RoutedButton';
import RoundButton from '../../components/RoundButton';
import ErrorBox from '../../components/ErrorBox';

const FormStateCar = () => {
  const { handleSubmit, register, control } = useForm() 
  const [error, setError] = useState()
  const [statusCollapsible, setStatusCollapsible] = useState(false)
  const [show, setShow] = useState(false)
  const onShiftStart = data => {
    for(let value in data){
      if((data[value] === undefined)||(data[value] === 0)||(data[value] === "")) {
        setError(`Revise los campos ${value}`)
        return
      }
    }
    console.log('todo ok')
  }
  return (
    <>
      <Body>
        <HeaderComp>
          <Frame>
            <RoundButton
              icon={
                <FormPreviousLink 
                  alignmentBaseline="central" 
                  size="large" 
                  color="white" 
                />
              }
            />
              {show && (
                  <Layer
                    animation="slide"
                    onEsc={() => setShow(false)}
                    onClickOutside={() => setShow(false)}
                  >
                <Box pad="medium" round="small" height="large" width="large">
                  <Carousel controls="arrows" play={5000} fill>
                    <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
                    <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                    <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
                  </Carousel>
                </Box>
              </Layer>
            )}
            <FormBox onSubmit={handleSubmit(onShiftStart)} pad="medium" message="Iniciar Turno">
              <Button
                label={statusCollapsible === false ? "Vehículo asignado" : "Ocultar"} 
                icon={<CircleInformation/>} 
                onClick={() => (
                  statusCollapsible === false ? setStatusCollapsible(true) : setStatusCollapsible(false)                
                  )} 
              />
              {error && <ErrorBox message={error}/>}
                <TextInput 
                  name="km_inicial"
                  size="large"
                  type="number"
                  placeholder="Kilómetros iniciales"
                  ref={register}
                />
                <Controller
                  name="limpieza_interior"
                  control={control}
                  render={({ onChange, value }) => (
                    <Select 
                      size="large"
                      placeholder="Limpieza interior" 
                      options={optionsStartShift} 
                      value={value}
                      onChange={event => onChange(event.value) }
                    />
                  )}
                />
                <Controller
                  name="limpieza_exterior"
                  control={control}
                  render={({ onChange, value }) => (
                    <Select 
                      size="large"
                      placeholder="Limpieza exterior" 
                      options={optionsStartShift} 
                      value={value}
                      onChange={event => onChange(event.value) }
                    />
                  )}
                />
                <Controller 
                  control={control}
                  name="combustible"
                  defaultValue={0}
                  render={({ onChange, value }) => (
                    <Range
                      textRange={`Nivel de combustible: ${value}%`}
                      max={100}
                      defaultValue={0}
                      onChange={event => onChange(event.target.value)}
                    />
                  )}
                />
                <Button 
                  primary 
                  type="submit"
                  size="large" 
                  fill="horizontal" 
                  label="Continuar" 
                />
            </FormBox>
          </Frame>
        </HeaderComp>
      </Body>
    </>
  )
};
export default FormStateCar;