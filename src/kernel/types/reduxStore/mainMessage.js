//@flow

export type MainMessageStore = {
  type?: "success" | "warn",
  header?: string,
  text?: string
};
