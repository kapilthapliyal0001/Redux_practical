export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_TASK":
      //  ADD to the task list
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case "REMOVE_TASK":
      // REMOVE the task from the task list
      return {
        ...state,
        task: state.task.filter((x) => x !== action.payload),
      };

    default:
      return state;
  }
}
