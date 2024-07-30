import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {
    return (
        <nav className={styles.headernav}>
            <ul className={styles.navList}>
                <li className={styles.logo}>
                    <img src="/images/logo.png" alt="logotipo da empresa" />
                </li>
                <div className={styles.navLinks}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href='https://www.figma.com/design/AsmGjxRO6by8QjTG6W7pIx/Cult-iva?t=OUhRKOC94kwmZO0m-0' target='_blank'>Sobre nós</a>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Header;
