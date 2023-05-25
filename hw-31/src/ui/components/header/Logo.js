import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";
import Logo1 from './img/b10e9962776298800aeb1277caab5247.svg';

function Logo(props) {
    const {to, type} = props;
    return (type === 'a'
            ? <a href={to}>
                <img className={styles.logo} src={Logo1}/>
            </a>
            : <NavLink to={to}>
                <img className={styles.logo} src={Logo1}/>
            </NavLink>
    )
}

Logo.defaultProps = {
    type: 'a'
}

export default Logo;