
import React, { useState } from 'react'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 

interface CalendarProps {
    onChange?: () => void;
    value: Date
  }

 const  Calendarcomponent = ({onChange, value}: CalendarProps) =>{ 
	

	return ( 
		<div> 
			<Calendar 
				onChange={onChange} 
				value={value} 
			/> 
		</div> 
	); 
}

export default Calendarcomponent
