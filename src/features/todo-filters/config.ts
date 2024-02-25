export type Filter = {
  id: number;
  title: string;
  config: import("../../entities/todo").todoModel.QueryConfig;
};

export const filters: Record<number, Filter> = {
  1: {
    id: 1,
    title: "All",
    config: {},
  },
  2: {
    id: 2,
    title: "Active",
    config: { completed: false },
  },
  3: {
    id: 3,
    title: "Completed",
    config: { completed: true },
  },
};


export const filtersList = Object.values(filters);

export const getFilterById = (id: number) => filters[id];
