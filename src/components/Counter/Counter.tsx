import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const countArray = React.useRef<null | number[]>([])
    const prevCount = React.useRef<null | number>();

    React.useEffect(() => {

      prevCount.current = count;
    
    }, [count])

    const handleIncrement = () => {
        countArray.current && countArray.current.push(1)
        setCount(count + 1)
    }
    const handleDecrement = () => {
        if (count > 0) {
            countArray.current && countArray.current.pop()
            setCount(count - 1)
        }
    }
   console.log(' countArray.current: ', countArray.current);
  return (
    <div>
        <p>Curr: {count}, Prev: {prevCount.current}</p>
        <button data-testid='incrementBtn'  onClick={handleIncrement}>Increment</button>
        <button data-testid='decrementBtn'  onClick={handleDecrement}>Decrement</button>
       {
        countArray.current && countArray.current.map(ele => 
            <div>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.
            </div>
            )
       }
    </div>
  )
}

export default Counter;