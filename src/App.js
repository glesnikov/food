import React from 'react';
import { useObserver } from 'mobx-react';
import { StoresProvider } from './contexts/storesContext';
import FoodList from './components/FoodList/FoodList';
import FoodForm from './components/FoodForm/FoodForm';
import './App.css';

function App() {
    return (
        <StoresProvider>
            <FoodForm />
            <FoodList />
        </StoresProvider>
    );
}

export default App;
