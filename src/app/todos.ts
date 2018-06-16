interface ITodo {
   content: string;
   complete: boolean;
}

export const todos: ITodo[] = [
   { content: 'Bread', complete: false },
   { content: 'Water', complete: true },
   { content: 'Notebook', complete: true },
   { content: 'Paper', complete: false }
];
