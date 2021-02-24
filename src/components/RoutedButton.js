import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Button } from 'grommet'

const RoutedButton = ({history, to, handleClick, onClick, ...props}) => {
  return (
    <Button
      onClick={e => {
      handleClick | onClick && handleClick(e)
      history.push(to)}}
      {...props}
    />
  )}

RoutedButton.propTypes = {
  to: PropTypes.string,
}

export default withRouter(RoutedButton)