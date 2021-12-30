import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

// css
import './index.css';

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <section className='counter-container'>
            <div className='text'>{count}</div>
            <div className='buttons'>
                <button type='button' onClick={() => dispatch(increment())}>+</button>
                <button type='button' onClick={() => dispatch(reset())}>Reset</button>
                <button type='button' onClick={() => dispatch(decrement())}>-</button>
            </div>
        </section>
    )
}

export default Counter
