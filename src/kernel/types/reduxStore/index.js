//@flow
export * from "./orderForm";
export * from "./mainMessage";

import type {OrderFormStore} from "./orderForm";
import type {MainMessageStore} from "./mainMessage";

export type ReduxStore = {
  orderForm: OrderFormStore,
  mainMessage: MainMessageStore
};
