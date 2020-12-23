import React, { useState } from "react";

export default ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const list = options.map((option) => {
    if (option.value === selected.value) {
      return null; // Don't render anything
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {list}
          </div>
        </div>
      </div>
    </div>
  );
};
