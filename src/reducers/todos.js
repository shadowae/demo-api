// const defaultState = {
//   previousValue: {},
//   currentValue: {},
// };

// const initFnt = (originalValue, newValue) => ({
//   previousValue: originalValue.currentValue,
//   currentValue: newValue,
// });

const todos = (state = [], action) => {
  switch (action.type) {
    case 'INIT_TODO':
    console.log('this is the data', action.data);
    console.log('this is the num', action.id);
      return [
        ...state,
        {
          id: action.id,
          data: action.data,
        }
      ];
    // case 'UPDATE_TODO':
    //   return initFnt(state, action.data);
    default:
      return state;
  }
};


export default todos;

