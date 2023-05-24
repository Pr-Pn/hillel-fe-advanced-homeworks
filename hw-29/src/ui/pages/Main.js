import React from "react";
import '../../index.css'

import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import TodoForm from "../containers/TodoForm";
import Wrapper from "../containers/Wrapper";
import EditInput from "../components/EditInput";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            editEnabled: false,
            currentItem: {}
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.enableEdit = this.enableEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    componentDidMount() {
        this.setState({
            items: JSON.parse(localStorage.getItem('items')) || []
        })
    }

    handleAdd(event) {
        event.preventDefault();
        const input = event.target.getElementsByClassName('form__input')[0];
        const text = input.value;
        const newItems = [
            ...this.state.items,
            {id: Math.random(), text,}
        ]
        this.setState({
            items: newItems
        })
        localStorage.setItem('items', JSON.stringify(newItems))
        input.value = ''
    }

    handleRemove(id) {
        this.setState((state) => {
            const {items} = state;
            const newItems = items.filter(item => item.id !== id)
            localStorage.setItem('items', JSON.stringify(newItems))
            return {
                items: newItems,
            }
        })
    }

    enableEdit(id) {
        const item = this.state.items.find(item => item.id === id);
        this.setState({
            editEnabled: true,
            currentItem: item,
        });
    }

    handleSave(value) {
        const targetId = this.state.currentItem.id;
        const items = this.state.items;
        items.forEach(it => {
            if (it.id === targetId) {
                it.text = value;
            }
        });
        this.setState({
            items: items,
            editEnabled: false,
            currentItem: null
        });
        localStorage.setItem('items', JSON.stringify(items));
    }

    render() {
        const {items, editEnabled, currentItem} = this.state;
        return (
            <Wrapper>
                <Header/>
                {(editEnabled) ? <EditInput
                    text={currentItem.text}
                    handleSave={this.handleSave}
                /> : <TodoForm handleAdd={this.handleAdd}/>}
                <div>
                    {items.map(item => (
                        <TodoItem
                            key={item.id}
                            text={item.text}
                            id={item.id}
                            handleRemove={this.handleRemove}
                            enableEdit={this.enableEdit}
                        />
                    ))}
                </div>
            </Wrapper>
        );
    }
}

export default Main;
