import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type QueryConfig = {
  completed?: boolean;
};

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodosState = {
  queryConfig?: QueryConfig;
  list: Todo[];
};

const initialState: TodosState = {
  queryConfig: {},
  list: [
    {
      id: "1",
      title: "First",
      completed: false,
    },
    {
      id: "2",
      title: "Second",
      completed: true,
    },
    {
      id: "3",
      title: "Third",
      completed: false,
    },
    {
      id: "4",
      title: "Find the page at https://github.com/sol-sirol",
      completed: false,
    },
    {
      id: "5",
      title: "Rate my pinned projects",
      completed: false,
    },
    {
      id: "6",
      title: "To hire me",
      completed: false,
    },
  ],
};

// export const fetchTodos = createAsyncThunk<Todo[], void, {rejectValue: string}>(
//   'todos/fetchTodos',
//   async (_, { rejectWithValue }) => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

//     if (!response.ok) {
//       return rejectWithValue('Server Error!');
//     }

//     const data = await response.json();

//     return data;
//   }
// );

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setQueryConfig: (state, { payload }: PayloadAction<QueryConfig>) => {
      state.queryConfig = payload;
    },
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setQueryConfig, addTodo, toggleComplete, removeTodo } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
