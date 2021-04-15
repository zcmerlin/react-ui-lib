import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import DateContext from './DateContext'
import DebounceInput from 'react-debounce-input'

function Input(props) {
  const { value, onInputChange } = useContext(DateContext)
  return <DebounceInput {...props} debounceTimeout={300} value={value.textInput} onChange={onInputChange} />
}

Input.propTypes = {}

export default Input
