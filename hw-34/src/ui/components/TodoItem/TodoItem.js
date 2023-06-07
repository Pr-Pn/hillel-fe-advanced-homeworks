import Button from "../Button";
import style from "./TodoItem.module.css";


function TodoItem(props) {
    const {text, handleRemove, id} = props;
    const onClick = () => {
        handleRemove(id);
    }
    return (
        <div className={style.item}>
            <div className={style.item__description}>{text}</div>
            <Button
                text="Видалити"
                onClick={onClick}
                isDelete
            />
        </div>
    )
}

export default TodoItem;