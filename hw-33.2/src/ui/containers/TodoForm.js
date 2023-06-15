import '../../index.css';

import Input from "../components/Input";
import Button from "../components/Button";

function TodoForm(props) {
    const { handleAdd } = props;
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

export default TodoForm;