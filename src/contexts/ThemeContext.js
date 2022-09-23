import React from 'react';

const ThemeContext = React.createContext();

export const ThemeProvider = ThemeContext.Provider;
export const ThemeCOnsumer = ThemeContext.Consumer;

export default ThemeContext;
