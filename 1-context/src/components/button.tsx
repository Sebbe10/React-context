import { useContext } from "react";
import { Myinfo } from "../App";

export const Button = () => {
  const contextValue = useContext(Myinfo);

  console.log(contextValue);

  return <p>Button</p>;
};
