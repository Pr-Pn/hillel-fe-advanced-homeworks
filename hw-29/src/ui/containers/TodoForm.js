import React from "react";
import '../../index.css';

import Input from "../components/Input";
import Button from "../components/Button";

export default class TodoForm extends React.Component {
    render() {
        const { handleAdd } = this.props;
        return (
            <form
                className="form"
                onSubmit={handleAdd}
            >
                <Input/>
                <Button text="Додати"/>
            </form>
        )
    }
}