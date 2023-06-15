// Core
import { Provider } from "react-redux";
// Helpers
import '../../index.css';
// Engine
import {store} from "../../engine/init/store";
// Parts
import Todo from "../containers/Todo";


function Main() {
    return (
        <Provider store={store}>
            <Todo/>
        </Provider>
    );
}

export default Main;
