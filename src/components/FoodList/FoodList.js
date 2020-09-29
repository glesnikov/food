import React from 'react';
import PropTypes from 'prop-types';
import { useStores } from '../../hooks/useStores';

function FoodList() {
    const { items } = useStores().food;

    return (
        <div>
            {items.map((item) => (
                <Item {...item} />
            ))}
        </div>
    );
}

FoodList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FoodList;
