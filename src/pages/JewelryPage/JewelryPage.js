import React from 'react';
import ScrollTop from '../../ScrollTop';
import styles from './JewelryPage.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function JeweleryPage() {
  const { products } = useSelector((state) => state.products);
  const jeweleryList = products.filter((item) => item.category.includes('jewelery'));

  return (
    <>
      <ScrollTop />
      <section className={styles.sectionPage}>
        <div className={styles.navigation}>
          <div className={styles.home}>홈</div>
          <div className={styles.selected}>액세서리</div>
        </div>
        <div className={styles.itemContainer}>
          <h2 className={styles.fashionTitle}>악세서리</h2>
          <div className={styles.itemList}>
            {jeweleryList.map((item) => (
              <Link
                to={`/products/${item.id}`}
                className={styles.item}
                key={item.id}
                state={{ info: item, selected: '액세서리' }}
              >
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
        </div>
      </section>
    </>
  );
}
