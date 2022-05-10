import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import ModalAdd from "./ModalAdd";

const Header = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className={style.wrapp}>
      <NavLink to={"/"} className={style.title}>
        Products
      </NavLink>
      <button
        className={style.new_product}
        onClick={(e) => {
          setAddMode(true);
        }}
      >
        New product
      </button>
      {addMode && <ModalAdd setAddMode={setAddMode} />}
    </div>
  );
};

export default Header;
