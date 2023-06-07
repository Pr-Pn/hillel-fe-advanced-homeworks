import cx from "classnames";
import style from "./Button.module.css";


function Button(props) {
    const {text, isDelete, onClick, disabled} = props;
    const className = cx(
        style.button,
        {[style.isDelete]: isDelete}
    )
    return (
        <button className={className} disabled={disabled} onClick={onClick}>{text}</button>
    )
}

export default Button;