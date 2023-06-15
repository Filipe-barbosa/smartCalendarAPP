import React from 'react';
import { useTranslation } from 'react-i18next';

type TextInputProps = {
  title: string;
  placeholder: string;
};


export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ title, placeholder, ...rest }, ref) => {
    const { t } = useTranslation();
    return (
      <div className="grid w-auto">
        <p className="font-medium text-sm leading-6">{t(title)}</p>
        <input
          ref={ref}
          placeholder={t(placeholder) ?? ''}
          className="w-80 p-1.5 rounded-md border-gray-400 border"
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
  const { t } = useTranslation();
  return (
    <div>
      <label className="block text-gray-700 font-bold mb-2">{t(title)}</label>
      <input
        type="time"
        className="border rounded-md py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
