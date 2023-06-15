// Core
import {useSelector} from "react-redux";
// Engine
import {todosSelectors} from "../../engine/core/todos/slice";

export function Footer() {
    const length = useSelector(todosSelectors.length);

    return (
        <footer>
            Всього : {length}
        </footer>
    )
}