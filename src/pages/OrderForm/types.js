//@flow
import type {PropertyTypesApiMetadata} from "kernel/orderForm/types";

export type LoadDataPropsType = {
  bodyMetadata: PropertyTypesApiMetadata,
  propertyValue?: any,
  isFirstToLoad: ?boolean
};

export type ChangePropertyValuePropsType = {
  propertyId: string,
  propertyValue: any
};

export type PassedProps = {};

export type DispatchActions = {
  onLoadData: LoadDataPropsType => void,
  onChangePropertyValue: ChangePropertyValuePropsType => void
};

export type ResultSelector = {};

export type ComponentProps = PassedProps & DispatchActions & ResultSelector;
