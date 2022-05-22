import styles from './style.module.sass';
import cart from '../../asserts/header-cart.png'

function Product({product}) {
  return(
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
          <button>
            <img src={cart} alt="" />
          </button>
        </div>
    </div>
  )
}

export default Product