import React from 'react';

const InputFocusContext = React.createContext();

export const InputFocusProvider = InputFocusContext.Provider;
export const InputFocusConsumer = InputFocusContext.Consumer;

export default InputFocusContext;
