import '../../index.css';
import {useFormField} from "../../hooks/useFormField";

import Input from "../components/Input";
import Button from "../components/Button";

function TodoForm(props) {
    const { value, onChange } = useFormField('');
    const { handleAdd } = props;
    return (
        <form
            className="form"
            onSubmit={handleAdd}
        >
            <Input
                value={value}
                onChange={onChange}
            />
            <Button text="Додати"/>
        </form>
    )
}

export default TodoForm;