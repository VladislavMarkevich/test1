//@flow
import {createSelector, createStructuredSelector} from "reselect";

import {getOrderFormState} from "store/selectors";

import type {Selector} from "kernel/types/reduxDependencies";
import type {ComponentProps, ResultSelector} from "./types";

type Sel<T> = Selector<ComponentProps, T>;

const emptyValue = {};
const emptyString = "";
export const makeOrderFormPropertyProps: Sel<ResultSelector> = () => {
  const getIdProp: Sel<string> = (state, props) => props?.id || emptyString;

  const getValuesState: Sel<{[string]: any}> = createSelector(
    [getOrderFormState],
    orderFormState => orderFormState?.values || emptyValue
  );

  const getValue = createSelector([getIdProp, getValuesState], (idProp, valuesState) => {
    const {[idProp]: value} = valuesState;
    return value;
  });

  return createStructuredSelector({value: getValue});
};
