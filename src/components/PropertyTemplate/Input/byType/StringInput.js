//@flow
import React from "react";
import Form from "react-bootstrap/Form";

import type {InputProps} from "../types";

const StringInput = ({onChange}: InputProps): any => {
  const handleChangeValue = (e: any) => {
    const newValue = e.target.value;
    if (onChange) onChange(newValue);
  };
  return <Form.Control type="text" onChange={handleChangeValue} />;
};

export default StringInput;
