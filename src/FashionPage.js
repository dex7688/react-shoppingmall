import React from "react";
import ScrollTop from "./ScrollTop";
import styles from "./FashionPage.module.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

function FashionPage(props) {
  const fashionList = props.products.filter((item) =>
    item.category.includes("clothing")
  );

  return (
    <>
      <ScrollTop />
      <Nav />
      <section className={styles.sectionPage}>
        <div className={styles.navigation}>
          <div className={styles.home}>홈</div>
          <div className={styles.selected}>패션</div>
        </div>
        <div className={styles.itemContainer}>
          <h2 className={styles.fashionTitle}>패션</h2>
          <div className={styles.itemList}>
            {fashionList.map((item) => (
              <Link
                to={`/products/${item.id}`}
                className={styles.item}
                key={item.id}
              >
                <div className={styles.itemImageWrapper}>
                  <img
                    src={item.image}
                    alt="fashion"
                    className={styles.itemImage}
                  />
                </div>

                <div className={styles.itemInfo}>
                  <div className={styles.itemName}>{item.title}</div>
                  <div className={styles.itemPrice}>
                    {`$` + Math.round(item.price)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.items,
  };
};

export default connect(mapStateToProps)(FashionPage);
