//@flow

export type PassedProps = {};

export type DispatchActions = {
  onClose: () => void
};

export type ResultSelector = {
  isOpen: boolean,
  type: ?string,
  header: ?string,
  text: ?string
};

export type ComponentProps = PassedProps & DispatchActions & ResultSelector;
