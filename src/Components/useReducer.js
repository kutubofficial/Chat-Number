import React from "react";

const reducer = (state, action) => {
    if (action.type === "INCREASE") {
        state = state + 1;
    }
    if (state > 0 && action.type === "DECREASE") {
        state = state - 1;
    }
    const initialData = 10;
    const [state, dispatch] = useReducer(reduq, initialData)
    return (
        <div>

        </div>
    )
}
export default useReducer;

// isko App.js me lagao toh Hooks ko hata dena
// return me Hooks ka code lagega
// jsx ka code copy paste krdena