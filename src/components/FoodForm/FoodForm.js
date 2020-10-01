import React from "react";
import PropTypes from "prop-types";
import { useStores } from "../../hooks/useStores";

function FoodForm() {
    const { addItem } = useStores().food;
    return (
        <div>
            <button onClick={() => addItem("qdwqdwqdq")}>Add</button>
        </div>
    );
}

FoodForm.propTypes = {};

export default FoodForm;
