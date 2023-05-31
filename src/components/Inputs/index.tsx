type TextInputProps = {
  title: string;
  placeholder: string;
};

export const TextInput: React.FC<TextInputProps> = ({ title, placeholder }) => {
  return (
    <div className="grid w-auto">
      <p className="font-light">{title}</p>
      <input
        placeholder={placeholder}
        className="p-1.5 rounded-md border-gray-400 border"
      />
    </div>
  );
};

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
