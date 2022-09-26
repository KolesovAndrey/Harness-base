interface Props {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<Props> = ({
  title,
  type,
  onClick,
  style,
  className,
}) => {
  return (
    <button
      type={type ? type : 'button'}
      style={style}
      onClick={onClick}
      className={className}
    >
      {title}
    </button>
  );
};

export default Button;
