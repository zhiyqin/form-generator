import { init } from '@rematch/core';
import { Dispatch as DispatchRedux } from 'redux';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux';
import * as models from './form';

const store = init({
  models,
});

export type ModelConfig<S = any, RS = any> = {
  state: S;
  reducers: {
    [key: string]: (state: S, ...payload: any[]) => S;
  };
  effects: (dispatch: any) => {
    [key: string]: (payload?: any, rootState?: RS) => Promise<any>;
  };
};
export type Models<M = any> = {
  [key: string]: ModelConfig<M>;
};
export type RematchDispatch<T extends Models> = {
  [K in keyof T]: RematchReducer<T[K]['reducers']> &
    AsyncRematchReducer<ReturnType<T[K]['effects']>>;
} & DispatchRedux;

type RematchReducer<T> = {
  [K in keyof T]: T[K] extends (state: infer S, ...payload: infer P) => any
    ? (...payload: P) => S
    : never;
};
type AsyncRematchReducer<T> = {
  [K in keyof T]: T[K] extends () => infer S
    ? () => S
    : T[K] extends (payload: infer P, ...args: any[]) => infer S
    ? (payload: P) => S
    : () => Promise<any>;
};

export type RematchRootState<T extends Models> = {
  [K in keyof T]: T[K]['state'];
};

// start
export type RootModel = typeof models;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch: () => Dispatch = useReduxDispatch;

export default store;
