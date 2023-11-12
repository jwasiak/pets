import React from "react";

const Select = ({ breeds, selectBreed }) => {
  const view = [];
  breeds.forEach((option, key) => {
    view.push(
      <option key={key} value={option}>
        {option}
      </option>
    );
  });

  const select = (ev) => {
    selectBreed(ev.target.value);
  };

  return (
    <select className="has-background-grey has-text-black" onChange={select}>
      <option value="">Select breed ...</option>
      {view}
    </select>
  );
};

export default Select;
