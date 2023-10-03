interface Todo {
    title: string;
    description: string;
}

const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
};
function updateTodo(originalTodo: Todo, fieldsToUpdateTodo: any) {
    return { ...originalTodo, ...fieldsToUpdateTodo };
}


const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
});


