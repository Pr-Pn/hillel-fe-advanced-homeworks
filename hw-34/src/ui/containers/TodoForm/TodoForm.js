import {Field, Form} from "react-final-form";
import style from "./TodoForm.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

function TodoForm(props) {
    const {handleAdd} = props;

    return (
        <Form
            onSubmit={handleAdd}
            validate={values => {
                const errors = {}
                if (!values.newTodoItem) {
                    errors.newTodoItem = null;
                } else {
                    if (values.newTodoItem.length < 5) {
                        errors.newTodoItem = 'Введіть мінімум 5 символів!'
                    }
                }
                return errors
            }}
            render={({handleSubmit, restart, submitting, invalid}) => (
                <form
                    className={style.form}
                    onSubmit={event => {
                        handleSubmit(event).then(restart);
                    }}
                >
                    <Field name="newTodoItem">
                        {(props) => (
                            <Input {...props}/>
                        )}
                    </Field>
                    <Button disabled={submitting || invalid} text="Додати"></Button>
                </form>
            )}
        />
    )

}

export default TodoForm;