
import Styles from './Header.module.css';

function Header() {
  return (
    <header className={Styles.header}>
      <a href="">Home</a>
      <a href="">Contact</a>
      <a href="">About</a>
      <a href="">account</a>
    </header>
  )
}

export default Header;