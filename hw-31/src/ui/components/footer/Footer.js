import styles from './Footer.module.css';
import Wrapper from "../../containers/Wrapper";
function Footer() {
    return(
        <footer className={styles.footer}>
            <Wrapper>
                <p>Змістовний футер</p>
            </Wrapper>
        </footer>
    )
}

export default Footer;