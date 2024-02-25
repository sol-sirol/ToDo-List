import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addTodoAsync,
  fetchTodoList,
  removeTodoAsync,
  toggleCompleteAsync,
} from "../api";

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
  status: "idle" | "loading" | "failed";
};

const initialState: TodosState = {
  queryConfig: {},
  list: [],
  status: "idle",
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetchTodoList();
  return response.data;
});
export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (todoTitle: string) => {
    const response = await addTodoAsync(todoTitle);
    return response.data;
  }
);
export const toggleComplete = createAsyncThunk(
  "todos/toggleComplete",
  async (todoId: string) => {
    const response = await toggleCompleteAsync(todoId);
    return response.data;
  }
);
export const removeTodo = createAsyncThunk(
  "todos/removeTodo",
  async (todoId: string) => {
    const response = await removeTodoAsync(todoId);
    return response.data;
  }
);

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setQueryConfig: (state, { payload }: PayloadAction<QueryConfig>) => {
      state.queryConfig = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addNewTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.status = "idle";
        state.list.push(action.payload);
      })
      .addCase(toggleComplete.pending, (state) => {
        state.status = "loading";
      })
      .addCase(toggleComplete.fulfilled, (state, action) => {
        state.status = "idle";
        const toggledTodo = state.list.find(
          (todo) => todo.id === action.payload
        );
        if (toggledTodo) {
          toggledTodo.completed = !toggledTodo.completed;
        }
      })
      .addCase(removeTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = state.list.filter((todo) => todo.id !== action.payload);
      });
  },
});

export const { setQueryConfig } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
