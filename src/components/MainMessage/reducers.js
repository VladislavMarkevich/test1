//@flow
import {handleActions} from "redux-actions";

import {MAIN_MESSAGE_OPEN, MAIN_MESSAGE_CLOSE} from "./actionTypes";

import type {Reducer} from "kernel/types/reduxDependencies";
import type {MainMessageStore} from "kernel/types/reduxStore";

const defaultState = {};

const open: Reducer<MainMessageStore, MainMessageStore> = (state, action) => {
  const {payload: messageData} = action;
  return {...state, ...messageData};
};

const close: Reducer<MainMessageStore, null> = () => {
  return defaultState;
};

const mainMessageReducers: any = handleActions(
  {
    [MAIN_MESSAGE_OPEN]: open,
    [MAIN_MESSAGE_CLOSE]: close
  },
  defaultState
);

export default mainMessageReducers;
