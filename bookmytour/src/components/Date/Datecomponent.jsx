import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datecomponent = ({ onDateChange }) => {
    const startDate= new Date()
    const handleDateChange = (event) => {
      const newDate = event.target.value;
      onDateChange(newDate);
    };
  return (
    <div>
      <h4>Date</h4>
      <input type='date' onChange={handleDateChange} />
    </div>
  )
}

export default Datecomponent