import '../../index.css';
import {NavLink} from "react-router-dom";

function Link(props) {
    const {to, color, children, type} = props;
    return ( type === 'a'
        ? <a href={to} style={{color}} className="link">{children}</a>
        : <NavLink to={to} style={{color}} className="link">{children}</NavLink>
    )
}

Link.defaultProps = {
    type: 'a'
}

export default Link;