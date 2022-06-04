import {useDispatch} from 'react-redux'
import { deleteItemsFromCart } from '../Store/cart/reducer';
import styles from './style.module.sass';
import {useNavigate} from 'react-router-dom';

function CartItem({product}){
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteFromCart = () => {
    dispatch(deleteItemsFromCart(product.id))
  }

  return(
    <div className={styles.cartItem}>
      <div className={styles.cartTop}>
        <h1>{product.title}</h1>
        <h2>items: {product.quantity}</h2>
        <h3>{product.price}$</h3>
      </div>
      <div className={styles.cartBottom}>
        <button onClick={deleteFromCart}>Delete</button>
        <button onClick={() => navigate('/product/' + product.id)}>More</button>
      </div>
    </div>
  )
}
export default CartItem;