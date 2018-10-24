import { createContext } from "react";

const appContext = createContext({
  authenticated: false,
  auth: () => {},
  unauth: () => {}
});

export const AppProvider = appContext.Provider;
export const AppConsumer = appContext.Consumer;
