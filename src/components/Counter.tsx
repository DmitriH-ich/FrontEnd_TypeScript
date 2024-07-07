import { useEffect } from 'react';
import styles from './counter.module.css'

interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter: React.FC<CounterProps> = ({ count, setCount }) => {
  useEffect(() => {
    console.log('counter init');
  }, []);

  return (
    <div className= {styles.counter}>
      <p>{count}</p>
      <div>
        <button onClick={() => setCount(count - 1)}>minus!</button>
        <button onClick={() => setCount(count + 1)}>plus!</button>
      </div>
    </div>
  );
};

export default Counter;
