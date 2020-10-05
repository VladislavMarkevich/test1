//@flow
import {createSelector, createStructuredSelector} from "reselect";

import {getMainMessageState} from "store/selectors";

import type {Selector} from "kernel/types/reduxDependencies";
import type {ComponentProps, ResultSelector} from "./types";

type Sel<Res> = Selector<ComponentProps, Res>;

export const makeMainMessageProps: Sel<ResultSelector> = () => {
  const getIsOpen: Sel<boolean> = createSelector(
    [getMainMessageState],
    mainMessage => Object.keys(mainMessage).length !== 0
  );

  const getType: Sel<?string> = createSelector([getMainMessageState], mainMessage => mainMessage?.type);

  const getHeader: Sel<?string> = createSelector([getMainMessageState], mainMessage => mainMessage?.header);

  const getText: Sel<?string> = createSelector([getMainMessageState], mainMessage => mainMessage?.text);

  return createStructuredSelector({
    isOpen: getIsOpen,
    type: getType,
    header: getHeader,
    text: getText
  });
};
