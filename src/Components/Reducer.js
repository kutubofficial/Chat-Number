import React, { useReducer } from "react";
import './Colour.css';

const myReducer = (state, action) => {
    if (action.type === "INCREASE") {
        state = state + 1;
    }
    if (state > 0 && action.type === "DECREASE") {
        state = state - 1;
    }
    return state;
};
    const Reducer = () => {
        const initialData = 10;
        const [state, dispatch] = useReducer(myReducer, initialData)
    
    return (
        <div>
            <h1>{state}</h1>
            <button id='increase' onClick={() => dispatch({ type: "INCREASE" })}>INCREASE</button>
            <button id='decrease' onClick={() => dispatch({ type: "DECREASE" })}>DECREASE</button>
        </div>
    )
    }
export default Reducer;
