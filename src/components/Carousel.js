import React, { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.css";
import image1 from "../images/img_shop_fashion.jpeg";
import image2 from "../images/img_shop_digital.jpeg";
import image3 from "../images/img_shop_grocery.jpeg";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import cx from "clsx";
import { Link } from "react-router-dom";

export default function Carousel() {
  const initial = 0;
  const end = 2;
  const [slideIdx, setSlideIdx] = useState(initial);
  const [dotId, setDotId] = useState(0);
  const containerRef = useRef();

  const handleNextClick = () => {
    if (slideIdx === 2) {
      setSlideIdx(initial);
      setDotId(initial);
    } else {
      setSlideIdx((prev) => prev + 1);
      setDotId((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (slideIdx === 0) {
      setSlideIdx(end);
      setDotId(end);
    } else {
      setSlideIdx((prev) => prev - 1);
      setDotId((prev) => prev - 1);
    }
  };

  useEffect(() => {
    containerRef.current.style.transform = `translate(${slideIdx * -100}vw)`;
    containerRef.current.style.transition = "all 0.35s ease-in-out";
  }, [slideIdx]);

  useEffect(() => {
    containerRef.current.style.transform = `translate(${dotId * -100}vw)`;
    containerRef.current.style.transition = "all 0.35s ease-in-out";
  }, [dotId]);

  return (
    <>
      <section className={styles.carousel}>
        <div className={styles.nextButton} onClick={handleNextClick}>
          <AiFillCaretRight className={styles.buttonIcon} />
        </div>
        <div className={styles.prevButton} onClick={handlePrevClick}>
          <AiFillCaretLeft className={styles.buttonIcon} />
        </div>
        <div className={styles.dotContainer}>
          <span
            className={cx(styles.dot, {
              [styles.selected]: dotId === 0,
            })}
            id="0"
            onClick={(e) => {
              setDotId(+e.target.id);
              setSlideIdx(+e.target.id);
            }}
          ></span>
          <span
            className={cx(styles.dot, {
              [styles.selected]: dotId === 1,
            })}
            id="1"
            onClick={(e) => {
              setDotId(+e.target.id);
              setSlideIdx(+e.target.id);
            }}
          ></span>
          <span
            className={cx(styles.dot, {
              [styles.selected]: dotId === 2,
            })}
            id="2"
            onClick={(e) => {
              setDotId(+e.target.id);
              setSlideIdx(+e.target.id);
            }}
          ></span>
        </div>
        <div className={styles.container} ref={containerRef}>
          <div className={styles.item}>
            <img src={image1} className={styles.img} alt="fashion" />
            <div className={styles.textContainer}>
              <h2 className={styles.title}>물빠진 청바지!</h2>
              <p className={styles.description}>
                이제 막 도착한 패션 청바지를 구경해 보세요.
              </p>
              <Link to="/fashion" className={styles.goButton}>
                바로가기 <HiOutlineArrowSmRight className={styles.goIcon} />
              </Link>
            </div>
          </div>

          <div className={styles.item}>
            <img src={image2} className={styles.img} alt="digital" />
            <div className={styles.textContainer}>
              <h2 className={styles.title}>신속한 업무처리!</h2>
              <p className={styles.description}>
                다양한 디지털 상품을 둘러보세요.
              </p>
              <Link to="/digital" className={styles.goButton}>
                바로가기 <HiOutlineArrowSmRight className={styles.goIcon} />
              </Link>
            </div>
          </div>

          <div className={styles.item}>
            <img src={image3} className={styles.img} alt="grocery" />
            <div className={styles.textContainer}>
              <h2 className={styles.title}>신선한 식품!</h2>
              <p className={styles.description}>
                농장 직배송으로 더욱 신선한 식료품을 만나보세요.
              </p>
              <Link to="/accessory" className={styles.goButton}>
                바로가기 <HiOutlineArrowSmRight className={styles.goIcon} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
