import React from 'react';
type TextInputProps = {
  title: string;
  placeholder: string;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ title, placeholder, ...rest }, ref) => {
    return (
      <div className="grid w-auto">
        <p className="font-light">{title}</p>
        <input
          ref={ref}
          placeholder={placeholder}
          className="p-1.5 rounded-md border-gray-400 border"
          {...rest}
        />
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
type TimeInputProps = {
  title: string;
};

export const TimeInput: React.FC<TimeInputProps> = ({ title }) => {
  return (
    <div>
      <label className="block text-gray-700 font-bold mb-2">{title}</label>
      <input
        type="time"
        className="border rounded-md py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
