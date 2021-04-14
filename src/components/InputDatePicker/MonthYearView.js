import React from "react";
import PropTypes from "prop-types";
import ViewLayout from "./ViewLayout";
import MonthPicker from "./MonthPicker";
import { TertiaryButton, TertiaryIconButton } from "../Button";

function MonthYearView(props) {
  const { calendar, onSelectMonth, onSetDateView } = props
  const { monthIndex, year } = calendar
  return <ViewLayout
            header={{
              leftElement: <TertiaryIconButton icon="arrowleft" />,
              middleElement: <span>{monthIndex} {year}</span>
            }}
            bodyElement={<MonthPicker selectedMonthIndex={monthIndex} onSelect={onSelectMonth}/>}
            footerElement={<TertiaryButton>today</TertiaryButton>}
         />
}

MonthYearView.propTypes = {
  calendar: PropTypes.shape({
    year: PropTypes.number,
    monthIndex: PropTypes.number
  }),
  onSelectMonth: PropTypes.func,
  onSetDateView: PropTypes.func
};

export default MonthYearView;