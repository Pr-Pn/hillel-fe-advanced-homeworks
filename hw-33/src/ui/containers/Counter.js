import { store } from "../engine/init/store";

function Counters() {

    return (
        <Provider store={store}>
            <div>
                <ValueContainer value={value}/>
                <Button onClick={onIncrement} text="Increment" />
                <Button onClick={onDecrement} text="Decrement" />
            </div>
        </Provider>
    );
}

export default Counters;
