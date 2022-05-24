import {useDispatch} from 'react-redux'
import { deleteItemsFromCart } from '../Store/cart/reducer';

function CartItem({product}){
  const dispatch = useDispatch();

  const deleteFromCart = () => {
    dispatch(deleteItemsFromCart(product.id))
  }

  return(
    <div>
      <div>
        <h1>{product.title}</h1>
        <h2>items: {product.quantity}</h2>
        <h3>{product.price}$</h3>
      </div>
      <div>
        <button onClick={deleteFromCart}>Delete</button>
        <button>More</button>
      </div>
    </div>
  )
}
export default CartItem;