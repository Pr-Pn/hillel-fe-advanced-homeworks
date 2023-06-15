// Parts
import Header from "../components/Header";
import TodoForm from "./TodoForm";
import TodoItem from "../components/TodoItem";
import Wrapper from "./Wrapper";
// Core
import {useDispatch, useSelector} from "react-redux";
// Engine
import {todosActions, todosSelectors} from "../../engine/core/todos/slice";
import {useEffect} from "react";
import {Footer} from "../components/Footer";

function Todo() {
    const items = useSelector(todosSelectors.items);
    const dispatch = useDispatch();

    const handleAdd = (event) => {
        event.preventDefault();
        const input = event.target.getElementsByClassName('form__input')[0];
        const text = input.value;
        const newItems = [
            ...items,
            { id: Math.random(), text, }
        ]
        dispatch(todosActions.addItems(newItems));
        localStorage.setItem('items', JSON.stringify(newItems));
        input.value = '';
    }
    /*const handleRemove = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
    }*/
    useEffect(
        () => {
            dispatch(todosActions.addItems(JSON.parse(localStorage.getItem('items'))));
        },
        []
    )
    return (
        <Wrapper>
            <Header/>
            <TodoForm handleAdd={handleAdd}/>
            <div>
                {items.map(item => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        id={item.id}
                        // handleRemove={handleRemove}
                    />
                ))}
            </div>
            <Footer />
        </Wrapper>
    )
}

export default Todo;