//@flow

type ReducerAction<Payload, TMeta = any> = {|
  type: string,
  payload: Payload,
  error?: true,
  meta?: TMeta
|};

export type Reducer<ReduxStore, Payload, TMeta = any> = (
  state: ReduxStore,
  action: ReducerAction<Payload, TMeta>
) => ReduxStore;

type Dispatch = any => any;

export type Action<ReduxStore, T> = (dispatch: Dispatch, getState: () => ReduxStore) => T;
