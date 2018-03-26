
let nextID = 0
export const initTodo = data => ({
  type: 'INIT_TODO',
  id: nextID++,
  data,
});

// TO DO: Additional functions to handle non init calls
export const updateTodo = data => ({
    type: 'UPDATE_TODO',
    data,
  });

