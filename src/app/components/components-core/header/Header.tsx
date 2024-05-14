import "./header.scss";
import React from "react";

interface Header {
  slot_start?: React.ReactNode;
  slot_end?: React.ReactNode;
  slot_center?: React.ReactNode;
}

const HeaderComponent: React.FC<Header> = ({ slot_start, slot_center, slot_end }) => {
  return (
    <header className="header d-center">
      <div className="header-content container d-center">
        {slot_start && <>{slot_start}</>}
        {slot_center && <>{slot_center}</>}
        {slot_end && <>{slot_end}</>}
      </div>
    </header>
  );
};
export default HeaderComponent;
