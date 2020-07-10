import { createContext } from 'react';

// Context untuk tema
export const Context = createContext({
    theme: 'light',
    onThemeChange: () => {}
})