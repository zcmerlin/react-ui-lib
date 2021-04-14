import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { buildYears } from './generator'
import { TertiaryButton, TertiaryIconButton } from '../Button'
import styled from 'styled-components'

const YearPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ScrollIconButton = styled(TertiaryIconButton)`
  width: 100%;
`
const YearsList = styled.ul`
  list-style: none;
  padding: 0;
`

function YearPicker(props) {
  const { selectedYear, onSelectYear } = props
  const [yearsWindow, setYearsWindow] = useState(buildYears(selectedYear, 3))
  
  function getMiddleYear() {
    return yearsWindow[Math.floor(yearsWindow.length/2)]
  }

  function scroll(pace) {
    setYearsWindow(buildYears(getMiddleYear() + pace, 3))
  }

  function onscrollUp(e) {
    e.stopPropagation()
    scroll(-1)
  }

  function onscrollDown(e) {
    e.stopPropagation()
    scroll(1)
  }

  function onWheel(e) {
    e.preventDefault()
    const {deltaY} = e
    const absolutePath = Math.round(Math.log(Math.abs(deltaY)))
    let pace = deltaY > 0 ? 1 : -1
    if(absolutePath > 5) {
      pace = pace * Math.floor((absolutePath / 2))
    }
    scroll(pace)
  }
  
  return (
    <YearPickerContainer onWheel={onWheel}>
      <ScrollIconButton icon="arrowup" onClick={onscrollUp} />
      <YearsList>
        {
          yearsWindow.map((year, i) => (
            <li key={i}>
              <TertiaryButton modifier={"small"} onClick={() => onSelectYear(year)}>{year}</TertiaryButton>
            </li>
          ))
        }
      </YearsList>
      <ScrollIconButton icon="arrowdown" onClick={onscrollDown} />
    </YearPickerContainer>
  )
}

YearPicker.propTypes = {
  selectedYear: PropTypes.number,
  onSelectYear: PropTypes.func
}

export default YearPicker

