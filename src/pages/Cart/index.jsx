import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CartContent from './Content';

function Cart(){
  return(
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header/>
      <CartContent/>
      <Footer/>
    </div>
  )
}

export default Cart;