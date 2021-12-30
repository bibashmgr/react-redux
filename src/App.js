import React from 'react';

// css
import './App.css';

// componets
import Counter from './features/Counter';

const App = () => {
  return (
      <>
        <h1 style={{textAlign:'center', margin:'25px'}}>COUNTER</h1>
        <Counter />
      </>
  );
}

export default App;
