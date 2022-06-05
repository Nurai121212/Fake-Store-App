import {useParams, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { setItemsInCart, deleteItemsFromCart } from '../../components/Store/cart/reducer';

import styles from './style.module.sass';

import Preloader from '../../components/Preloader';
import error from '../../asserts/cat-error.gif';

function ProductPage(){
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inCart, setAddToCart] = useState(false);
  
  const param = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  
  const appendToCart = (e) => {
    e.stopPropagation();

    dispatch(setItemsInCart(item));
    setAddToCart(true)
  }

  const deleteItem = () => {
    dispatch(deleteItemsFromCart(item.id))
    setAddToCart(false)
  }
  
  const getData = async() => {
    try{
      const res = await axios.get('https://fakestoreapi.com/products/' + param.id);
      setItem(res.data);

      if(items.find(elem => elem.id === res.data.id)){
        setAddToCart(true)
      };
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return(
    <>
      {loading ? (<Preloader/>) :
        (item ? (
          <div className={styles.product}>
            <div className={styles.productRight}>
              <h1>{item.title}</h1>
              <span>{item.category}</span>
              <h2>{item.price}$</h2>
              <p>{item.description}</p>
              <div>
              {inCart ? (
                <button onClick={deleteItem}>Delete  from Cart</button>
              ): (
                <button onClick={appendToCart}>Add to Cart</button>
              )}
              <button onClick={() => navigate(-1)}>Back</button>
              </div>
            </div>
            <div className={styles.productLeft}>
              <img src={item.image} alt="product" />
            </div>
          </div>) : (
          <div className={styles.errorDiv}>
            <h1>404 Not Found</h1>
            <img src={error} alt="error" />
          </div>)
        )
      }
    </>
  )
}

export default ProductPage;