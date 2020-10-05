//@flow
import React from "react";
import {connect} from "react-redux";

import {makeOrderFormPropertyProps} from "./selectors";
import PropertyTemplate from "components/PropertyTemplate";

import type {ComponentProps as Props} from "./types";

const Property = (props: Props) => {
  const {onChangePropertyValue, id, value} = props;

  const handleChangePropertyValue = (newValue: any) => {
    if (onChangePropertyValue) onChangePropertyValue({propertyId: id, propertyValue: newValue});
  };
  return <PropertyTemplate {...props} onChange={handleChangePropertyValue} value={value} />;
};

//$FlowFixMe
export default connect(makeOrderFormPropertyProps)(Property);
