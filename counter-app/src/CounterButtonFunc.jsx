


import React, { useState } from 'react';

function CounterButtonFunc() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter( functional component)</h1>
      <p>Current Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default CounterButtonFunc;