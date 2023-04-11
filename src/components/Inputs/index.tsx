type TextInputProps = {
  title: string;
  placeholder: string;
};

export const TextInput: React.FC<TextInputProps> = ({ title, placeholder }) => {
  return (
    <div className="grid w-auto gap-2">
      <p className="font-medium">{title}</p>
      <input
        placeholder={placeholder}
        className="p-2 rounded-md border-gray-400 border"
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
        className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
