//@flow
import React from "react";
import StringInput from "./byType/StringInput";
import ComboInput from "./byType/ComboInput";
import NumberInput from "./byType/NumberInput";

import CustomComboEvrooptInput from "./customByType/ComboEvrooptInput";

import type {InputProps as Props} from "./types";

const getInput = (props: Props): any => {
  const {type} = props;
  switch (type) {
    case "comboEvroopt":
      return <CustomComboEvrooptInput {...props} />;
    case "combo":
      return <ComboInput {...props} />;
    case "number":
      return <NumberInput {...props} />;
    case "string":
      return <StringInput {...props} />;
    default:
      return <StringInput {...props} />;
  }
};

export default getInput;
