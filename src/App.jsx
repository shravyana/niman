import React, { useState, useEffect } from 'react';

function Child(props) {
  return <h3>{props.message}</h3>;
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>React Hooks Demo</h2>
      <Child message="Welcome to React Hooks" />
      <p>Count: {count}</p>
    </div>
  );
}

export default App;