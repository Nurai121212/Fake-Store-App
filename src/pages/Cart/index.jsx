import {useSelector} from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Cart(){
  
  const items = useSelector(state => state.cart.cartItems);
  console.log(items);

  return(
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header/>
      <h1>This is Cart</h1>
      <Footer/>
    </div>
  )
}

export default Cart;