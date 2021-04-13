import React from 'react'
import PropTypes from 'prop-types'
import ViewLayout from './ViewLayout'
import DatePicker from './DatePicker'
import { TertiaryButton, TertiaryIconButton } from '../Button'

function DateView(props) {
  return (
    <ViewLayout
      header={{
        leftElement: <TertiaryIconButton icon="arrowleft" />,
        middleElement: <p>month year</p>,
        rightElement: <TertiaryIconButton icon="arrowright" />
      }}
      bodyElement={
        <DatePicker calendar={{year: 2021, monthIndex: 3}} selectedDate={new Date(2021, 3, 23)} />
      }
      footerElement={<TertiaryButton>Today</TertiaryButton>}
    />
  )
}

DateView.propTypes = {

}

export default DateView

