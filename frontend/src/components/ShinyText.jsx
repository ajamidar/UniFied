
const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className} text-5xl font-bold`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
