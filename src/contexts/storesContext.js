import React from "react";
import FoodStore from "../stores/food";

export const storesContext = React.createContext(null);

export const StoresProvider = ({ children }) => {
    const store = {
        food: new FoodStore(),
    };

    return (
        <storesContext.Provider value={store}>
            {children}
        </storesContext.Provider>
    );
};
