import React from "react";
import '../../index.css';

export default class EditInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: props.text,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSave(this.state.inputValue);
    }
    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input className="form__input" type="text" value={this.state.inputValue} onChange={this.handleChange} />
                <input className="form__btn" type="submit" />
            </form>
        )
    }
}
