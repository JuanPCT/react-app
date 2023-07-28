import React from 'react';

export const CounterApp = () => {
    const [count, setCount] = React.useState(0)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    return (
        <div>
        <h1>Counter</h1>
        <p>Current count: <strong>{count}</strong></p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    )
}
 
export default CounterApp;