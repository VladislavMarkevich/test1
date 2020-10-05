//@flow
import {handleActions} from "redux-actions";

import {ORDER_FORM_PUSH_INFO, ORDER_FORM_CHANGE_VALUE} from "./actionTypes";

import type {OrderFormStore} from "kernel/types/reduxStore";
import type {Reducer} from "kernel/types/reduxDependencies";

const defaultState = {cache: {}, values: {}};

type PushInfoPayload = {
  mainPropertyKey: string,
  secondaryPropertyKey: string,
  isFirstToLoad: string,
  value: any
};

const pushInfo: Reducer<OrderFormStore, PushInfoPayload> = (state, action) => {
  const {
    payload: {mainPropertyKey, secondaryPropertyKey, value, isFirstToLoad}
  } = action;

  const {cache} = state;
  const newCache = {...cache};

  if (isFirstToLoad) {
    newCache[mainPropertyKey] = value;
  } else {
    const {[mainPropertyKey]: mainLayer = {}} = state;
    const newMainLayer = {...mainLayer};
    newMainLayer[secondaryPropertyKey] = value;

    newCache[mainPropertyKey] = newMainLayer;
  }

  return {...state, cache: newCache};
};

type ChangeValuePayload = {
  propertyId: string,
  propertyValue: any
};

const changeValue: Reducer<OrderFormStore, ChangeValuePayload> = (state, action) => {
  const {
    payload: {propertyId, propertyValue}
  } = action;
  const {values} = state;
  const newValues = {...values};
  newValues[propertyId] = propertyValue;

  return {...state, values: newValues};
};

const orderFormReducers: any = handleActions(
  {
    [ORDER_FORM_PUSH_INFO]: pushInfo,
    [ORDER_FORM_CHANGE_VALUE]: changeValue
  },
  defaultState
);

export default orderFormReducers;
