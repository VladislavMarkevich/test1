//@flow
import type {PropertyType} from "kernel/orderForm/types";
import type {LoadDataPropsType} from "pages/OrderForm/types";

export type ComponentProps = PropertyType & {
  onLoadData: LoadDataPropsType => void,
  onChange: (newValue: string) => void,
  value: any
};
