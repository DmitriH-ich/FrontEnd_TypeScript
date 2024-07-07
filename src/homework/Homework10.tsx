import { useEffect, useState } from 'react';
import styles from './homework10.module.css';
import Counter from '../components/Counter';

interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Homework10 = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [count, setCount] = useState<number>(10);

  async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
    console.log('getProducts только вначале и при counter !');
  }

  const changeToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log('rerender!');

  return (
    <div>
      <header className={styles.header}>
        <h3>Lesson {count}</h3>
        <div>
          <a href="/">Home</a>
          <a href="/">Info</a>
          <a href="/">Profile</a>
          <span onClick={changeToggle}>≡</span>
        </div>
      </header>
      {toggle && (
        <div className={styles.menu}>
          <a href="/">Home</a>
          <a href="/">Info</a>
          <a href="/">Profile</a>
        </div>
      )}
      {toggle && <Counter count={count} setCount={setCount} />}
      <ul>
        {products.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Homework10;
