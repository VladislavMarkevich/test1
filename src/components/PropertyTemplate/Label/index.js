//@flow
import React from "react";
import Form from "react-bootstrap/Form";

import type {ComponentProps as Props} from "./types";

const Label = ({displayName, isRequired}: Props): any => {
  const className = isRequired ? "required" : "";
  return <Form.Label className={className}>{displayName}</Form.Label>;
};

export default Label;
