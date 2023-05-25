import {useEffect, useState} from "react";

import '../../index.css';

import TodoItem from "../components/TodoItem";
import TodoForm from "../containers/TodoForm";
import Wrapper from "../containers/Wrapper";

function Main() {
    const [items, setItems] = useState([]);

    useEffect(
        () => {
            setItems(JSON.parse(localStorage.getItem('items')) || [])
        },
        []
    )

    const handleAdd = (event) => {
        event.preventDefault();
        const input = event.target.getElementsByClassName('form__input')[0];
        const text = input.value;
        const newItems = [
            ...items,
            {id: Math.random(), text,}
        ]
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
        input.value = '';
    }
    const handleRemove = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
    }

    return (
        <main className="main">
            <Wrapper>
                <h1>Todo List</h1>
                <TodoForm handleAdd={handleAdd}/>
                <div>
                    {items.map(item => (
                        <TodoItem
                            key={item.id}
                            text={item.text}
                            id={item.id}
                            handleRemove={handleRemove}
                        />
                    ))}
                </div>
            </Wrapper>
        </main>
    );
}

export default Main;
