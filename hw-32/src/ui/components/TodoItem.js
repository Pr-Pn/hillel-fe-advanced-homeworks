import Button from "./Button";


function TodoItem(props) {
    const { text, handleRemove, id } = props;
    const onClick = () => {
        handleRemove(id);
    }
    return (
        <div className="todo-item">
            <div className="todo-item__description">{text}</div>
            <Button
                text="Видалити"
                onClick={onClick}
                isDelete
            />
        </div>
    )
}

export default TodoItem;