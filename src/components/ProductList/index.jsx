import Product from "../ProductItem"
import styles from './style.module.sass'

import {useNavigate} from 'react-router-dom';

function List({products}){
  const navigate = useNavigate();
  return(
    <ul className={styles.list}>
      {products.map((item) => {
          return(
            <li key={item.id}>
              <Product 
                product={item} 
                onMore={(product) => navigate('/product/' + product.id)}
              />
            </li>
          )
        })}
    </ul>
  )
}

export default List