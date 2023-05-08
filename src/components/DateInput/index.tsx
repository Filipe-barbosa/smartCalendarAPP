import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DataContext } from '../../context/DataContext';

function DateInput() {
  const { data, setData } = useContext(DataContext);

  function handleDateChange(date: Date) {
    setData(date);
  }

  return (
    <div className="w-full inline-flex border rounded-md shadow-sm">
      <DatePicker className="form-input w-full px-3 py-2 leading-5 text-gray-700" selected={data} onChange={handleDateChange} />
    </div>

  );
}

export default DateInput;
