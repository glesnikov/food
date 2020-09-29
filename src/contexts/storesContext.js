import React from 'react';
import { useLocalStore } from 'mobx-react';
import crateFoodStore from '../stores/food';

export const storesContext = React.createContext(null);

export const StoresProvider = ({ children }) => {
    const store = {
        food: useLocalStore(crateFoodStore),
    };

    return (
        <storesContext.Provider value={store}>
            {children}
        </storesContext.Provider>
    );
};
