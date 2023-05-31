type ButtonProps = {
  title: string;
  click: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, click }) => {
  return (
    <div>
      <button
        className="bg-[#21d17d] text-white font-medium py-2 px-4 border rounded-lg shadow text-sm"
        onClick={click}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
