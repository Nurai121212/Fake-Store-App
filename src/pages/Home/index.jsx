import styles from './style.module.sass';
import {useState, useEffect} from 'react';
import axios from 'axios';

import List from "../../components/ProductList";
import Preloader from '../../components/Preloader'

import error from '../../asserts/cat-error.gif'

function HomeContent(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://fakestoreapi.com/products')
          .then((data) => {
            setData(data.data);
          }).catch((error) => {
            console.error(error);
          }).finally(() => {
            setLoading(false);
          })
  },[]);

  return(
    <div className={styles.container}>
      {loading ? (<Preloader/>) : (
        data.length ? (
          <>
            <h1>All Products</h1>
            <List products={data}/>
          </>
        ) : 
        (
          <div className={styles.errorDiv}>
            <h1>404 Not Found</h1>
            <img src={error} alt="" />
          </div>
        )
      )}
    </div>
  )
}

export default HomeContent;