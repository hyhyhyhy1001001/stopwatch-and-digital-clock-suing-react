import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    const restCount = () => {
        setCount(0)
    }

    return(
        <div>
            <p>Count: {count}</p>
            <div className="btn">
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={restCount}>Reset</button>
            </div>
        </div>
    )
}

export default Counter