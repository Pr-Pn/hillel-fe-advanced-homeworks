import cx from "classnames";

function Button(props) {
    const { text, isDelete, onClick } = props;
    const className = cx(
        'form__btn',
        // {
        //     'todo-item__delete': isDelete
        // }
    )
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

export default Button;