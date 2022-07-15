import './Button.css';

const Button = (props) => {

  const {onClickCallback, buttonValue} = props;

  return (
    <button className={"btn"} onClick={onClickCallback}>{buttonValue}</button>
  );
};

export default Button;