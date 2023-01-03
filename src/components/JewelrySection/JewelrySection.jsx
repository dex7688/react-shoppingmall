import styles from './JewelrySection.module.css';
import { Link } from 'react-router-dom';
import useFecthProducts from '../../hooks/useFecthProducts';

export default function JewelrySection(props) {
  const [products, loading] = useFecthProducts('jewelery');

  return (
    <section className={styles.jewelry}>
      <h2 className={styles.jewelryTitle}>{props.title}</h2>
      {loading && <div className={styles.loading}></div>}
      <div className={styles.itemsContainer}>
        {products?.map((item) => (
          <Link to={`/products/${item.id}`} className={styles.item} key={item.id} state={{ info: item }}>
            <div className={styles.itemImageWrapper}>
              <img src={item.image} alt='electronicList' className={styles.itemImage} />
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
