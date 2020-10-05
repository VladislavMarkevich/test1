//@flow
import React, {useMemo} from "react";
import Form from "react-bootstrap/Form";

import Label from "./Label";
import Input from "./Input";

import type {ComponentProps as Props} from "./types";

const propertyTemplateComponent = ({
  displayName,
  isRequired,
  type,
  options,
  apiMetadata,
  isFirstToLoad,
  onLoadData,
  onChange,
  value
}: Props): any => {
  const labelProps = useMemo(() => {
    return {displayName, isRequired};
  }, [displayName, isRequired]);
  const inputProps = useMemo(() => {
    return {type, options, onLoadData, onChange, isFirstToLoad, apiMetadata, value};
  }, [type, options, onLoadData, onChange, isFirstToLoad, apiMetadata, value]);

  return (
    <div className="property-template">
      <Label {...labelProps} />
      <Input {...inputProps} />
    </div>
  );
};

//$FlowFixMe
export default React.memo<Props>(propertyTemplateComponent);
