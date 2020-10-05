//@flow
import type {Reducer as R, Action as A} from "./common/redux-action";
import type {Selector as S} from "./common/reselect";
import type {ReduxStore} from "./reduxStore";

export type Reducer<ReduxStore, Payload, TMeta = any> = R<ReduxStore, Payload, TMeta>;
export type Action<T> = A<ReduxStore, T>;
export type Selector<TProps, TResult> = S<ReduxStore, TProps, TResult>;
