//@flow

export type Selector<ReduxStore, TProps, TResult> = (
  state: ReduxStore,
  props: TProps,
  ...rest: $ReadOnlyArray<any>
) => TResult;
