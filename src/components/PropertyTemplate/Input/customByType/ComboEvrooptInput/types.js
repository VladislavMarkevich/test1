//@flow
import type {InputProps} from "../../types";
import type {PropertyTypesOptions} from "kernel/orderForm/types";

export type PassedProps = InputProps;

export type DispatchActions = {};

export type ResultSelector = {
  options: PropertyTypesOptions
};

export type ComponentProps = PassedProps & DispatchActions & ResultSelector;
