//@flow
import type {OrderFormStore, MainMessageStore} from "kernel/types/reduxStore";
import type {Selector} from "kernel/types/reduxDependencies";

const emptyObject = {};

export const getOrderFormState: Selector<any, OrderFormStore> = state => state?.orderForm || emptyObject;
export const getMainMessageState: Selector<any, MainMessageStore> = state => state?.mainMessage || emptyObject;
