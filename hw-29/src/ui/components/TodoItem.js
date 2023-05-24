import React from "react";

import Button from "./Button";
import EditItemButton from "./EditItemButton";

export default class TodoItem extends React.Component {
    render() {
        const { id, text, handleRemove, enableEdit } = this.props;
        const onClick = () => {
            handleRemove(id);
        }
        const onEditBtnClick = () => {
            enableEdit(id);
        }
        return (
            <div className="todo-item">
                <div className="todo-item__description">{text}</div>
                <EditItemButton onEditBtnClick={onEditBtnClick}/>
                <Button
                    text="Видалити"
                    onClick={onClick}
                    isDelete
                />
            </div>
        )
    }
}