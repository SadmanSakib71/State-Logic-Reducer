export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [...tasks, { id: action.id, text: action.id, done: false }];
    }
    case "changed": {
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error(`No action Matched with ${action.type}`);
    }
  }
}
