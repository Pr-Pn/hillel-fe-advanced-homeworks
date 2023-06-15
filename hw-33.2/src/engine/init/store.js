import { configureStore } from "@reduxjs/toolkit";
// Engine
import { todosReducer } from '../core/todos/slice';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    }
})