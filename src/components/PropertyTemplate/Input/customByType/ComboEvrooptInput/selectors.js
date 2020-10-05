//@flow
import {createSelector, createStructuredSelector} from "reselect";

import {getOrderFormState} from "store/selectors";

import type {Selector} from "kernel/types/reduxDependencies";
import type {OrderFormCacheStore} from "kernel/types/reduxStore";
import type {PropertyTypesOptions} from "kernel/orderForm/types";
import type {ComponentProps, ResultSelector} from "./types";

type Sel<T> = Selector<ComponentProps, T>;

const emptyString = "";
const emptyObject = {};
export const makeComboEvrooptInputProps: Sel<ResultSelector> = () => {
  const getMethodNameProp: Sel<string> = (state, props) => props?.apiMetadata?.methodName || emptyString;

  const gerPreviousPropertyIdProp: Sel<string> = (state, props) =>
    props?.apiMetadata?.previousPropertyId || emptyString;

  const getIsFirstToLoadProp: Sel<boolean> = (state, props) => props?.isFirstToLoad || false;

  const getCacheState: Sel<OrderFormCacheStore> = createSelector(
    [getOrderFormState],
    orderFormState => orderFormState?.cache || emptyObject
  );

  const getValuesState: Sel<OrderFormCacheStore> = createSelector(
    [getOrderFormState],
    orderFormState => orderFormState?.values || emptyObject
  );

  const getPreviosValue: Sel<string> = createSelector(
    [getValuesState, gerPreviousPropertyIdProp],
    (valuesState, previousPropertyIdProp) => {
      const {[previousPropertyIdProp]: {id = ""} = {}} = valuesState;
      return id;
    }
  );

  const getOptions: Sel<PropertyTypesOptions> = createSelector(
    [getCacheState, getMethodNameProp, getIsFirstToLoadProp, getPreviosValue],
    (cacheState, methodNameProp, isFirstToLoadProp, previosValue) => {
      if (isFirstToLoadProp) {
        const {[methodNameProp]: options} = cacheState;
        return options;
      } else {
        const {[methodNameProp]: {[previosValue]: options} = {}} = cacheState;
        return options;
      }
    }
  );

  return createStructuredSelector({options: getOptions});
};
