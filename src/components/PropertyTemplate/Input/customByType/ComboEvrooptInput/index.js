//@flow
import React, {useEffect} from "react";
import {connect} from "react-redux";

import {makeComboEvrooptInputProps} from "./selectors";
import ComboInput from "../../byType/ComboInput";

import type {ComponentProps as Props} from "./types";

const ComboEvrooptInput = (props: Props) => {
  //$FlowFixMe
  const {isFirstToLoad, onLoadData, apiMetadata, onChange, options, value} = props || {};

  useEffect(() => {
    const {id} = value || {};
    if (isFirstToLoad && onLoadData)
      onLoadData({
        bodyMetadata: apiMetadata,
        isFirstToLoad
      });
  }, []);

  useEffect(() => {
    const {id} = value || {};
    if (value && onLoadData)
      onLoadData({
        bodyMetadata: apiMetadata,
        isFirstToLoad,
        propertyValue: id
      });
  }, [value]);

  useEffect(() => {
    if (options && options.length === 1 && onChange) onChange(options[0]);
  }, [options]);

  return <ComboInput {...props} />;
};

//$FlowFixMe
export default connect(makeComboEvrooptInputProps)(ComboEvrooptInput);
