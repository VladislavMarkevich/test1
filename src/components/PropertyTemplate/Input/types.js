//@flow

import type {PropertyTypesType, PropertyTypesOptions, PropertyTypesApiMetadata} from "kernel/orderForm/types";
import type {LoadDataPropsType} from "pages/OrderForm/types";

export type InputProps = {
  options: ?PropertyTypesOptions,
  type: ?PropertyTypesType,
  isFirstToLoad: ?boolean,
  apiMetadata: ?PropertyTypesApiMetadata,
  onLoadData: LoadDataPropsType => void,
  onChange: (newValue: any) => void,
  value: any
};
