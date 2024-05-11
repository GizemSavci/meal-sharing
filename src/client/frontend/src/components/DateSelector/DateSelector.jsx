import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelector({ selectedDate, onDateChange }) {
  return (
    <div className='App'>
      <DatePicker
        showIcon
        selected={selectedDate}
        onChange={date => onDateChange(date)}
        dateFormat='dd/MM/yyyy'
        minDate={new Date()}
        isClearable
        scrollableMonthYearDropdown
      />
    </div>
  );
}

export default DateSelector;