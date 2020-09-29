const createStore = () => {
    const store = {
        items: [],
        addItem: (str) => store.items.push(str),
    };
};

export default createStore;
