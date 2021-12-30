# Getting Started with React-Redux

First of all, you need to install `@reduxjs/toolkit` and `react-redux` packages to your project.
```cmd
npm install @reduxjs/toolkit react-redux
```

__NOTE:__
```
STORE => contains gobalized states

ACTION => describes what you wanna do

REDUCER => checks the actions and modifies the state accordingly

DISPATCH => implements actions
```

After installing the necessary packages, you need to create a file named `src/store.js`. Import the `configureStore` API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

```js
// store.js
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {},
})
```

Once the store is created, Import the Redux store we just created in `src/index.js`, put a `<Provider>` around your `<App>`, and pass the store as a prop:

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

Add a new file named `src/features/counter/counterSlice.js`. In that file, import the `createSlice` API from Redux Toolkit.

```js
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice(
    {
        name: 'counter',
        initialState: {
            value: 0,
        },
        reducers: {
            increment: (state) => {
                state.value += 1
            },
            decrement: (state) => {
                state.value -= 1
            },
        }
    },
)

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

Next, we need to import the reducer function from the counter slice and add it to our store.

```js
// index.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```

We can read data from the store with `useSelector` and dispatch actions using `useDispatch`.

```js
// Counter.js
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
```

