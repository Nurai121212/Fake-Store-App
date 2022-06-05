import styles from './style.module.sass';
import preloader from '../../asserts/reload-cat.gif'

function Preloader(){
  return(
    <div className={styles.preloader}>
      <div className={styles.loadImg}>
        <img src={preloader} alt="preloader gif" />
      </div>
    </div>
  )
}

export default Preloader;