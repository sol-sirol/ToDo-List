const defaultTodoList = [
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
];

// A mock functions to mimic making an async request for data

export const fetchTodoList = () => {
  return new Promise<{ data: typeof defaultTodoList }>((resolve) =>
    setTimeout(() => resolve({ data: defaultTodoList }), 1500)
  );
};
export const addTodoAsync = (todoTitle: string) => {
  return new Promise<{ data: (typeof defaultTodoList)[0] }>((resolve) => {
    const newTodo = {
      id: new Date().toISOString(),
      title: todoTitle,
      completed: false,
    };
    setTimeout(() => resolve({ data: newTodo }), 500);
  });
};
export const toggleCompleteAsync = (todoId: string) => {
  return new Promise<{ data: string }>((resolve) => {
    setTimeout(() => resolve({ data: todoId }), 500)
  });
};
export const removeTodoAsync = (todoId: string) => {
  return new Promise<{ data: string }>((resolve) => {
    setTimeout(() => resolve({ data: todoId }), 500)
  });
};
