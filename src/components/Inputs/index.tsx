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
