import React, { useEffect, useState, useRef } from 'react';
import styles from './Nav.module.css';
import { HiOutlineMoon, HiOutlineShoppingBag, HiOutlineSun, HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'clsx';
import { fetchProducts } from '../../redux/product/actions';
import { changeDarkMode } from '../../redux/theme/actions';

export default function Nav() {
  const [search, setSearch] = useState([]);
  const [focus, setFocus] = useState(false);
  const [slide, setSlide] = useState(false);
  const slideRef = useRef();
  const { products } = useSelector((state) => state.products);
  const { carts } = useSelector((state) => state.carts);
  const { dark } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  console.log(dark);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (!dark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }

    localStorage.setItem('theme', dark);
  }, [dark]);

  // 검색 창 필터 구현
  const handleInputChange = (e) => {
    if (e.target.value.length === 0) {
      setSearch([]);
    } else {
      const data = products.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
      setSearch(data);
    }
  };

  const handleInputClick = () => {
    setFocus(true);
  };

  const handleItemClick = () => {
    setFocus(false);
  };

  const cartNum = carts
    ? Object.values(carts).reduce((acc, cur) => {
        return acc + cur.count;
      }, 0)
    : 0;

  const handleSlideClick = () => {
    setSlide(true);
    slideRef.current.style.transform = 'translateX(0)';
  };

  return (
    <nav className={styles.container}>
      <div className={styles.slidesMenu} ref={slideRef}>
        <Link to='/fashion' className={styles.navText}>
          패션
        </Link>
        <Link to='/accessory' className={styles.navText}>
          악세서리
        </Link>
        <Link to='/digital' className={styles.navText}>
          디지털
        </Link>
      </div>
      <div className={styles.nav}>
        <div className={styles.navLeft}>
          <span className={styles.burgerWrapper} onClick={handleSlideClick}>
            <HiMenu className={styles.burgerMenu} />
          </span>
          <Link to='/' className={styles.linkLogo}>
            <h1 className={styles.logo}>React Shop</h1>
          </Link>
          <Link to='/fashion' className={styles.navText}>
            패션
          </Link>
          <Link to='/accessory' className={styles.navText}>
            악세서리
          </Link>
          <Link to='/digital' className={styles.navText}>
            디지털
          </Link>
        </div>

        <div className={styles.navRight}>
          <div className={styles.iconLight} onClick={() => dispatch(changeDarkMode())}>
            {dark ? <HiOutlineSun className={styles.iconMoon} /> : <HiOutlineMoon className={styles.iconMoon} />}
          </div>
          <div className={styles.dropDown}>
            <input
              className={styles.input}
              placeholder='검색'
              onChange={handleInputChange}
              onFocus={handleInputClick}
            />
            <ul className={cx(styles.searchList)}>
              {focus &&
                search.map((item) => (
                  <li className={styles.searchInner} key={item.id} onClick={handleItemClick}>
                    <Link to={`/products/${item.id}`} className={styles.searchLink} state={{ info: item }}>
                      <span className={styles.searchItem}>{item.title}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <Link className={styles.iconCartWrapper} to='/cart'>
            <HiOutlineShoppingBag className={styles.iconCart} />
            <span className={styles.cartNum}>{cartNum}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
