//@flow

export type OrderFormCacheStore = {[string]: any};

export type OrderFormStore = {
  cache: OrderFormCacheStore,
  values: {[string]: any}
};
