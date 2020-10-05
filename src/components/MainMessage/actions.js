//@flow
import {createActions} from "redux-actions";
import {MAIN_MESSAGE_CLOSE} from "./actionTypes";

import type {Action} from "kernel/types/reduxDependencies";

const {mainMessageClose: closeMainMessage} = createActions(MAIN_MESSAGE_CLOSE);

export const closeMessage: () => Action<void> = () => dispatch => {
  dispatch(closeMainMessage());
};
