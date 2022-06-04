import styles from './style.module.sass';
import cart from '../../asserts/header-cart.png'

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
          <img src={product.image} alt="" />
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
                <img src={cart} alt="" />
              </button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Product