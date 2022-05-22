import Product from "../ProductItem"
import styles from './style.module.sass'

function List({products}){
  return(
    <ul className={styles.list}>
      {products.map((item) => {
          return(
            <li key={item.id}>
              <Product product={item}/>
            </li>
          )
        })}
    </ul>
  )
}

export default List