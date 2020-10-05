//@flow
import type {ChangePropertyValuePropsType} from "../types";

export type PassedProps = {
  id: string,
  onChangePropertyValue: ChangePropertyValuePropsType => void
};

export type DispatchActions = {};

export type ResultSelector = {
  value: any
};

export type ComponentProps = PassedProps & DispatchActions & ResultSelector;
