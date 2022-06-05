import styles from './style.module.sass';
import cart from '../../asserts/header-cart.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {useDispatch} from 'react-redux'
import { setItemsInCart } from '../Store/cart/reducer';

function Product({product, onMore}) {
  const dispatch = useDispatch();

  const appendToCart = (e) => {
    e.stopPropagation();
    dispatch(setItemsInCart(product));
  }
  
  return(
    <>
      <div className={styles.product}>
        <div className={styles.image}>
          <LazyLoadImage 
            effect='blur'
            src={product.image} 
            alt="product"
            height='400px'
            width='300px'
          />
        </div>
        <div className={styles.desc}>
          <h2>{product.title}</h2>
          <h3>{product.category}</h3>
          <h4> Rate : {product.rating.rate}</h4>
        </div>
          <div className={styles.productBottom}>
            <h5>{product.price}$</h5>
            <div>
              <button onClick={() => onMore(product)}>More</button>
              <button onClick={appendToCart}>
                <img src={cart} alt="cart vec" />
              </button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Product