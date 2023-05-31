function Input(props) {
   const {value, onChange } = props;
    return (
        <input
            value={value}
            onChange={onChange}
            type="text"
            name="value"
            required
            className="form__input" />
    )
}

export default Input;