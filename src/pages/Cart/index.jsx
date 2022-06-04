import {useSelector} from 'react-redux'
import CartItem from '../../components/CartItem';
import styles from './style.module.sass'

function CartContent(){
  const items = useSelector((state) => state.cart.cartItems);
  const totalPrice = items.reduce((sum, item) => (sum += (item.price * item.quantity)), 0);

  return(
    <div className={styles.container}>
      {items.length ? (
        <>
          <ul className={styles.cartList}>
            {items.map((item) => {
              return(
                <li key={item.id}>
                  <CartItem product={item}/>
                </li>
              )
            })}
          </ul>
          <div className={styles.totalPrice}>
            Total : {totalPrice}$
          </div>
        </>
      ) : (
        <div className={styles.emptyText}>
          <h1>Cart is empty</h1>
        </div>
      )}
    </div>
  )
}

export default CartContent;