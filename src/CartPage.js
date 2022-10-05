import React, { useState } from "react";
import Nav from "./components/Nav";
import ScrollTop from "./ScrollTop";
import Footer from "./components/Footer";
import styles from "./CartPage.module.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addCart } from "./redux/cart/actions";

function CartPage(props) {
  const [modal, setModal] = useState(false);
  const cartList = Object.values(props.carts);
  const cartPrice = cartList.reduce((acc, cur) => {
    return acc + Math.round(cur.price * cur.count);
  }, 0);

  const handlePlusClick = (e) => {
    const itemId = e.target.dataset.product;
    const [selectProduct] = cartList.filter(
      (item) => Number(item.id) === Number(itemId)
    );

    localStorage.setItem(
      "cart",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cart")),
        [itemId]: {
          id: selectProduct.id,
          image: selectProduct.image,
          price: selectProduct.price,
          title: selectProduct.title,
          count: +JSON.parse(localStorage.getItem("cart"))[itemId].count + 1,
        },
      })
    );

    props.addCart(JSON.parse(localStorage.getItem("cart")));
  };

  const handleMinusClick = (e) => {
    const itemId = e.target.dataset.product;
    const [selectProduct] = cartList.filter(
      (item) => Number(item.id) === Number(itemId)
    );

    if (JSON.parse(localStorage.getItem("cart"))[itemId].count === 1) {
      const deleteList = JSON.parse(localStorage.getItem("cart"));
      delete deleteList[itemId];
      localStorage.setItem("cart", JSON.stringify(deleteList));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("cart")),
          [itemId]: {
            id: selectProduct.id,
            image: selectProduct.image,
            price: selectProduct.price,
            title: selectProduct.title,
            count: +JSON.parse(localStorage.getItem("cart"))[itemId].count - 1,
          },
        })
      );
    }

    props.addCart(JSON.parse(localStorage.getItem("cart")));
  };

  const handleBuybtnClick = () => {
    setModal(true);
  };

  const handleModalBuyClick = () => {
    setModal(false);
    localStorage.removeItem("cart");
    props.addCart({});
  };

  const handleModalCancelClick = () => {
    setModal(false);
  };

  return (
    <>
      <ScrollTop />
      <Nav />
      {modal && (
        <div className={styles.modal}>
          <div className={styles.modalWrapper}>
            <h3 className={styles.request}>정말로 구매하시겠습니까?</h3>
            <p className={styles.cartMessage}>
              장바구니의 모든 상품들이 삭제됩니다.
            </p>
            <div className={styles.btnWrapper}>
              <button className={styles.agreeBtn} onClick={handleModalBuyClick}>
                예
              </button>
              <button
                className={styles.cancelBtn}
                onClick={handleModalCancelClick}
              >
                아니오
              </button>
            </div>
          </div>
        </div>
      )}
      <section className={styles.cartPage}>
        <div className={styles.navigation}>
          <span className={styles.home}>홈</span>
          <span className={styles.naviCart}>장바구니</span>
        </div>

        <div className={styles.cartListWrapper}>
          <div className={styles.cartInner}>
            <div className={styles.cartList}>
              {cartList.length !== 0 ? (
                cartList.map((data) => (
                  <div className={styles.cartItem} key={data.id}>
                    <Link
                      className={styles.imageWrapper}
                      to={`/products/${data.id}`}
                    >
                      <img
                        src={`${data.image}`}
                        alt="product"
                        className={styles.itemImage}
                      />
                    </Link>
                    <div className={styles.productInfo}>
                      <h2 className={styles.itemTitle}>
                        <Link
                          to={`/products/${data.id}`}
                          className={styles.itemTitleText}
                        >
                          {data.title}
                        </Link>
                      </h2>
                      <p className={styles.itemPrice}>{`$ ${Math.round(
                        data.price * data.count
                      )}`}</p>

                      <div className={styles.btnWrapper}>
                        <div className={styles.btnInner}>
                          <button
                            className={styles.btnMinus}
                            data-product={data.id}
                            onClick={handleMinusClick}
                          >
                            -
                          </button>
                          <button className={styles.btnCount}>
                            {data.count}
                          </button>
                          <button
                            className={styles.btnPlus}
                            data-product={data.id}
                            onClick={handlePlusClick}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <h2 className={styles.emptyTitle}>
                    장바구니에 물품이 없습니다.
                  </h2>
                  <Link to={"/"} className={styles.goShopping}>
                    담으러 가기
                  </Link>
                </div>
              )}
            </div>
            <div className={styles.buyInner}>
              <div className={styles.finalPrice}>${cartPrice}</div>
              <button className={styles.btnBuy} onClick={handleBuybtnClick}>
                구매하기
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.item,
    carts: state.carts,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    addCart: (selectProduct) => dispatch(addCart(selectProduct)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(CartPage);
