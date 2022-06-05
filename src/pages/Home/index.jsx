import styles from './style.module.sass';
import {useState, useEffect} from 'react';
import axios from 'axios';

import List from "../../components/ProductList";
import Preloader from '../../components/Preloader';

import error from '../../asserts/cat-error.gif';

function HomeContent(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [errorMess, setErrorMess] = useState('')

  const getData = async() => {
    try{
      const res = await axios.get('https://fakestoreapi.com/products');
      setData(res.data);
    }catch(error){
      setErrorMess(error.message);
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  },[]);

  return(
    <>
      {loading ? (<Preloader/>) : (
        data.length ? (
          <>
            <h1 className={styles.homeTitle}>All Products</h1>
            <List products={data}/>
          </>
        ) : 
        (
          <div className={styles.errorDiv}>
            <h1>{errorMess}</h1>
            <img src={error} alt="error gif" />
          </div>
        )
      )}
    </>
  )
}

export default HomeContent;