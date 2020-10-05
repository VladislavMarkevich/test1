//@flow
import React from "react";
import Form from "react-bootstrap/Form";

import type {InputProps} from "../types";

const ComboInput = ({options, onChange, value}: InputProps): any => {
  const handleChangeValue = (e: any) => {
    const value = e.target.value;
    const newValue = (options || []).find(option => {
      return option.displayName === value;
    });
    if (onChange) onChange(newValue);
  };

  const {displayName: displayNameValue = ""} = value || {};

  return (
    <div className="combo-input">
      <Form.Control as="select" className="combo-input__select" onChange={handleChangeValue} value={displayNameValue}>
        {options
          ? options.map(option => {
              const {id, displayName} = option;
              return <option key={id}>{displayName}</option>;
            })
          : null}
      </Form.Control>
      <div className="combo-input__right-block">
        <i className="combo-input__arrow" />
      </div>
    </div>
  );
};

export default ComboInput;
