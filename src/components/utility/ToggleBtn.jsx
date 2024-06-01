import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

import { useState } from "react";

const ToggleBtn = () => {
  let [toggle, setToggle] = useState(true);

  let handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <IoMdAdd style={{ fontSize: "1.5rem" }} onClick={handleClick} />
      ) : (
        <RiSubtractFill style={{ fontSize: "1.5rem" }} onClick={handleClick} />
      )}
    </>
  );
};

export default ToggleBtn;
