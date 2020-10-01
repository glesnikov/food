import React from "react";
import { storesContext } from "../contexts/storesContext";

export const useStores = () => {
    const stores = React.useContext(storesContext);
    if (!stores) {
        throw new Error("useStore must be used within a StoreProvider.");
    }
    return stores;
};
