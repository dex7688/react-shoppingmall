import React, { useEffect, useRef } from 'react';
import styles from './ItemPage.module.css';
import { Link } from 'react-router-dom';
import ScrollTop from '../../ScrollTop';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/cart/actions';

export default function ItemPage() {
  const inputRef = useRef([]);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const selectProduct = state.info;
  const { carts } = useSelector((state) => state.carts);

  useEffect(() => {
    inputRef.current.forEach((item, idx) => {
      if (idx < Math.floor(selectProduct?.rating.rate / 0.5)) {
        return (item.style.opacity = '1');
      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(carts));
  }, [carts]);

  const handleAddCartClick = () => {
    const product = {
      id: selectProduct?.id,
      title: selectProduct?.title,
      price: selectProduct?.price,
      image: selectProduct?.image,
      count: 1,
    };

    dispatch(addCart(product));
  };

  return (
    <>
      <ScrollTop />
      <section className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.navigation}>
            <div className={styles.fashion}>{state.selected}</div>
            <div className={styles.itemTitle}>{selectProduct?.title}</div>
          </div>
          <div className={styles.itemWrapper}>
            <div className={styles.itemImg}>
              <img src={selectProduct?.image} alt='item' className={styles.image} />
            </div>
            <div className={styles.itemInfo}>
              <h2 className={styles.title}>{selectProduct?.title}</h2>
              <p className={styles.description}>{selectProduct?.description}</p>
              <div className={styles.starRating}>
                <div className={styles.star}>
                  <input
                    type='radio'
                    name='rating-1'
                    disabled
                    className={styles.starIcon1}
                    ref={(el) => (inputRef.current[0] = el)}
                  />
                  <input
                    type='radio'
                    name='rating-2'
                    disabled
                    className={styles.starIcon2}
                    ref={(el) => (inputRef.current[1] = el)}
                  />
                  <input
                    type='radio'
                    name='rating-3'
                    disabled
                    className={styles.starIcon1}
                    ref={(el) => (inputRef.current[2] = el)}
                  />
                  <input
                    type='radio'
                    name='rating-4'
                    disabled
                    className={styles.starIcon2}
                    ref={(el) => (inputRef.current[3] = el)}
                  />
                  <input
                    type='radio'
                    name='rating-5'
                    disabled
                    className={styles.starIcon1}
                    ref={(el) => (inputRef.current[4] = el)}
                  />
                  <input
                    type='radio'
                    name='rating-6'
                    disabled
                    className={styles.starIcon2}
                    ref={(el) => (inputRef.current[5] = el)}
                  />
                  <input
                    type='radio'
                    name='rating-7'
                    disabled
                    className={styles.starIcon1}
                    ref={(el) => (inputRef.current[6] = el)}
                  />
                  <input
                    type='radio'
                    name='rating-8'
                    disabled
                    className={styles.starIcon2}
                    ref={(el) => (inputRef.current[7] = el)}
                  />
                  <input
                    type='radio'
                    name='rating-9'
                    disabled
                    className={styles.starIcon1}
                    ref={(el) => (inputRef.current[8] = el)}
                  />
                  <input
                    type='radio'
                    name='rating-10'
                    disabled
                    className={styles.starIcon2}
                    ref={(el) => (inputRef.current[9] = el)}
                  />
                </div>
                <div className={styles.rate}>
                  {`${selectProduct?.rating.rate} / ${selectProduct?.rating.count} 참여`}
                </div>
              </div>
              <div className={styles.price}>{`$${Math.round(selectProduct?.price)}`}</div>
              <div className={styles.btnInner}>
                <button className={styles.addCart} onClick={handleAddCartClick}>
                  장바구니에 담기
                </button>
                <Link to='/cart' className={styles.goCart}>
                  장바구니로 이동
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
