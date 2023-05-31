type PropsButton = {
  title: string;
    onClick: () => void;
    onClickArgs?: any[];
    bgColor?: string;
    textColor?: string
    borderColor?: string;
    hoverBgColor?: string;

};

const Button: React.FC<PropsButton> = ({ title, onClick, onClickArgs = [], bgColor, textColor, borderColor, hoverBgColor }) => {
  const handleClick = () => {
    if (onClickArgs.length > 0) {
      onClick( ...onClickArgs );
    } else {
      onClick();
    }
  };
  return (
    <div>
      <button
        className={`bg-[${bgColor}] hover:bg-[${hoverBgColor}] text-${textColor} ${borderColor} font-Inter py-2 px-3 text-gray-800 font-semibold items-start flex-row gap-2 flex rounded-lg rounded`}
        type="button"
        onClick={() => {handleClick();} }
      >
        {title}
      </button>
    </div>
  );
};

export default Button;