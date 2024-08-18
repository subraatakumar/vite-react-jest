import React, { useState } from 'react';
import styles from './Counter.module.css'; // Importing CSS module for styling

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Counter</h1>
      <div className={styles.counter}>
        <button className={styles.button} onClick={handleDecrease}>
          Decrease
        </button>
        <span className={styles.count}>{count}</span>
        <button className={styles.button} onClick={handleIncrease}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
