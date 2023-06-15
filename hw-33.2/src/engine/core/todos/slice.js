import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            console.log(state);
            state.items = action.payload;
        }
    }
})

export const todosSelectors = {
    items: (state) => state.todos.items,
    length: (state) => state.todos.items.length,
}

export const todosActions = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

