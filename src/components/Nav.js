import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { HiOutlineMoon, HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import cx from "clsx";

import { connect } from "react-redux";
import { fetchProducts } from "../redux/product/actions";

function Nav(props) {
  const [search, setSearch] = useState([]);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    props.fetchProducts();
  }, []);

  // 검색 창 필터 구현
  const handleInputChange = (e) => {
    if (e.target.value.length === 0) {
      setSearch([]);
    } else {
      const data = props.products.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearch(data);
    }
  };

  const handleInputClick = () => {
    setFocus(true);
  };

  const handleItemClick = () => {
    setFocus(false);
  };

  const cartNum = props.carts
    ? Object.values(props.carts).reduce((acc, cur) => {
        return acc + cur.count;
      }, 0)
    : 0;

  return (
    <nav className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.navLeft}>
          <Link to="/" className={styles.linkLogo}>
            <h1 className={styles.logo}>React Shop</h1>
          </Link>
          <Link to="/fashion" className={styles.navText}>
            패션
          </Link>
          <Link to="/accessory" className={styles.navText}>
            악세서리
          </Link>
          <Link to="/digital" className={styles.navText}>
            디지털
          </Link>
        </div>

        <div className={styles.navRight}>
          <div className={styles.iconLight}>
            <HiOutlineMoon className={styles.iconMoon} />
          </div>
          <div className={styles.dropDown}>
            <input
              className={styles.input}
              placeholder="검색"
              onChange={handleInputChange}
              onFocus={handleInputClick}
            />
            <ul className={cx(styles.searchList)}>
              {focus &&
                search.map((item) => (
                  <li
                    className={styles.searchInner}
                    key={item.id}
                    onClick={handleItemClick}
                  >
                    <Link
                      to={`/products/${item.id}`}
                      className={styles.searchLink}
                    >
                      <span className={styles.searchItem}>{item.title}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <Link className={styles.iconCartWrapper} to="/cart">
            <HiOutlineShoppingBag className={styles.iconCart} />
            <span className={styles.cartNum}>{cartNum}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.items,
    carts: state.carts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
