import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo";



const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
        return state;
      },
      prepare: (description: string) => ({
        payload: {
          description,
          completed: false} as Todo,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    editTodo(state, action: PayloadAction<{index:number}>){
      console.log(action.payload);
      
      /* const index = state.filter((todo) => todo.id === action.payload); */
  
    },
    addEditItem(state, action){
      state[action.payload.index].description = action.payload.text

    }
  },  
});

export const { addTodo, removeTodo,editTodo, setTodoStatus, addEditItem } = todoSlice.actions;
export default todoSlice.reducer;