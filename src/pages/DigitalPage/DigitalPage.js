import React from 'react';
import styles from './DigitalPage.module.css';
import ScrollTop from '../../ScrollTop';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function DigitalPage() {
  const { products } = useSelector((state) => state.products);
  const electronicList = products?.filter((item) => item.category.includes('electronics'));

  return (
    <>
      <ScrollTop />
      <section className={styles.sectionPage}>
        <div className={styles.navigation}>
          <div className={styles.home}>홈</div>
          <div className={styles.selected}>디지털</div>
        </div>
        <div className={styles.itemContainer}>
          <h2 className={styles.fashionTitle}>디지털</h2>
          <div className={styles.itemList}>
            {electronicList.map((item) => (
              <Link
                to={`/products/${item.id}`}
                className={styles.item}
                key={item.id}
                state={{ info: item, selected: '디지털' }}
              >
                <div className={styles.itemImageWrapper}>
                  <img src={item.image} alt='fashion' className={styles.itemImage} />
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
