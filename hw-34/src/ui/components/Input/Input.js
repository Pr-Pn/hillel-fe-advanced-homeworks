import style from "./Input.module.css";


function Input(props) {
    const {meta, input} = props;
    return (
        <>
            <input {...input} className={style.input}/>
            {meta.error && meta.touched && <span className={style.error_massage}>{meta.error}</span>}
        </>
    )
}

export default Input;