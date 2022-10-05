import React from "react";
import { Link } from "react-router-dom";
import styles from "./FashionSection.module.css";
import { connect } from "react-redux";

function FashionSection(props) {
  const response = props.products?.filter((item) =>
    item.category.includes("clothing")
  );
  const fashionList = response.filter((item, idx) => idx < 4);

  return (
    <section className={styles.fashion}>
      <h2 className={styles.fashionTitle}>{props.title}</h2>
      <div className={styles.itemsContainer}>
        {fashionList.map((item) => (
          <Link
            to={`/products/${item.id}`}
            className={styles.item}
            key={item.id}
          >
            <div className={styles.itemImageWrapper}>
              <img
                src={item.image}
                alt="electronicList"
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
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.items,
    carts: state.carts,
  };
};

export default connect(mapStateToProps)(FashionSection);
