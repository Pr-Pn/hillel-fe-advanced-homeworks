import styles from './Header.module.css';
import Wrapper from "../../containers/Wrapper";
import Link from "../Link";
import Logo from "./Logo";

function Header() {
    return (
        <header className={styles.header}>
            <Wrapper>
                <div className={styles.header__components}>
                    <Logo type="nav" to="/"/>
                    <Link type="nav" to="/">Головна</Link>
                    <Link type="nav" to="/contacts">Контакти</Link>
                    <Link type="nav" to="/about">Про мене</Link>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header;

