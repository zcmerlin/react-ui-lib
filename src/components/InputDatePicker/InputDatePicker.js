import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from './DatePicker'

function InputDatePicker(props) {
  return (
    <DatePicker calendar={{year: 2021, monthIndex: 3}} selectedDate={new Date(2021, 3, 23)} />
  )
}

InputDatePicker.propTypes = {

}

export default InputDatePicker