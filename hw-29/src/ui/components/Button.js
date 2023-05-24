import React from "react";
import cx from "classnames";

export default class Button extends React.Component {
    render() {
        const { text, isDelete, onClick } = this.props;
        const className = cx(
            'form__btn',
            {
                'todo-item__delete': isDelete
            }
        )
        return (
            <button className={className} onClick={onClick}>{text}</button>
        )
    }
}