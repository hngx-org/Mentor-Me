import React, { useState } from "react"
import Calendar from "react-calendar"
import "./calendar.css"

interface CalendarProps {
  onChange?: () => void
  value: Date
}

const Calendarcomponent = ({ onChange, value }: CalendarProps) => {
  return (
    <div>
      <Calendar
        className={"w-full min-h-fit rounded-lg"}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Calendarcomponent
