import styles from './style.module.sass'

function Footer(){
  return(
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        © {new Date().getFullYear()} All rights reserved
      </div>
    </div>
  )
}

export default Footer