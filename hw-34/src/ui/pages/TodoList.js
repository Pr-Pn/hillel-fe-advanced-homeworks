import React, {useEffect, useState} from "react";
import '../../index.css';

import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import TodoForm from "../containers/TodoForm";
import Wrapper from "../containers/Wrapper";

function TodoList() {
    const [items, setItems] = useState([]);

    useEffect(
        () => {
            setItems(JSON.parse(localStorage.getItem('items')) || [])
        },
        []
    )

    const handleAdd = async (values) => {
        const newItems = [
            ...items,
            {id: Math.random(), text: values.newTodoItem,}
        ]
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
        values.newTodoItem = "";
    }

    const handleRemove = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
    }

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
                        handleRemove={handleRemove}
                    />
                ))}
            </div>
        </Wrapper>
    );
}

export default TodoList;
