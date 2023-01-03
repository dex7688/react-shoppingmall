import React from 'react';
import styles from './FashionSection.module.css';
import { Link } from 'react-router-dom';
import useFecthProducts from '../../hooks/useFecthProducts';

export default function FashionSection(props) {
  const [products, loading] = useFecthProducts("men's clothing");

  return (
    <section className={styles.fashion}>
      <h2 className={styles.fashionTitle}>{props.title}</h2>
      {loading && <div className={styles.loading}></div>}
      <div className={styles.itemsContainer}>
        {products?.map((item) => (
          <Link to={`/products/${item.id}`} className={styles.item} key={item.id} state={{ info: item }}>
            <div className={styles.itemImageWrapper}>
              <img src={item.image} alt={item.title} className={styles.itemImage} />
            </div>

            <div className={styles.itemInfo}>
              <div className={styles.itemName}>{item.title}</div>
              <div className={styles.itemPrice}>{`$` + Math.round(item.price)}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
