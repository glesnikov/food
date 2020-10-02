import React from 'react';
import PropTypes from 'prop-types';
import { useStores } from '../../hooks/useStores';
import { useObserver } from 'mobx-react';

function FoodList() {
    const { items } = useStores().food;

    return useObserver(() => <div>{items.join('_')}</div>);
}

FoodList.propTypes = {};

export default FoodList;
