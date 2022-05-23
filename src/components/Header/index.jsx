import styles from './style.module.sass';
import {NavLink} from 'react-router-dom'

import headerLogo from '../../asserts/logo-cultured-kid.png'
import headerCart from '../../asserts/header-cart.png'

function Header(){
  return(
    <div className={styles.header}>
      <div className={styles.headerContainer}>
          <div>
            <img src={headerLogo} alt="" className={styles.headerLogo}/>
          </div>
        <ul className={styles.headerNav}>
          <li className={styles.navItem}>
            <a href="/" className={styles.headerLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <NavLink to='/about' className={({ isActive }) => (isActive ? (styles.activeLink) : (styles.headerLink))}>About</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to='/login' className={({ isActive }) => (isActive ? (styles.activeLink) : (styles.headerLink))}>Log In</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to='/signup' className={({ isActive }) => (isActive ? (styles.activeLink) : (styles.headerLink))}>Sign Up</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to='/cart'>
              <img src={headerCart} alt="" className={styles.headerCart}/>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;