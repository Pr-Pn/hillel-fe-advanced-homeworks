import {useDispatch} from "react-redux";
import Button from "../components/Button";
import ValueContainer from "../components/ValueContainer";
import {decrement, increment} from "../../engine/core/counter/counterSlice";

function Counter() {
    const dispatch = useDispatch();
    const onIncrement = () => {
        dispatch(increment());
    }
    const onDecrement = () => {
        dispatch(decrement());
    }
    return (
        <div>
            <ValueContainer/>
            <Button onClick={onIncrement} text="Increment"/>
            <Button onClick={onDecrement} text="Decrement"/>
        </div>
    );
}

export default Counter;
