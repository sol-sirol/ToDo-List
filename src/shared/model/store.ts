import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { todoModel } from "../../entities/todo";

export const store = configureStore({
  reducer: {
    todos: todoModel.todoReducer, 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
