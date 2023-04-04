import React from "react";
type Props = {
  onClick: () => void;
};
const Button: React.FC<Props> = (props) => {
  return <button {...props}></button>;
};

export default Button;
