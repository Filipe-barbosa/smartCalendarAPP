import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Noop } from 'react-hook-form';

type DateInputProps = {
  onChange: () => void;
  onBlur: Noop;
  value: Date | null | undefined;
};

function DateInput({ onChange, onBlur, value }: DateInputProps) {
  return (
    <div className="w-full inline-flex border rounded-md shadow-sm">
      <DatePicker
        onChange={onChange}
        onBlur={onBlur}
        selected={value}
        className="form-input w-full px-3 py-2 leading-5 text-gray-700"
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
}

export default DateInput;
