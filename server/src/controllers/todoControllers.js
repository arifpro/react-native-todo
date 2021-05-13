import Todo from "../models/Todo.js";

// <==================== getAll ====================>
const getAll = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ _id: -1 });

    if (todos) {
      return res.status(200).json({ todos });
    }
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

// <==================== add ====================>
const add = async (req, res) => {
  const { title } = req.body;

  if (!(title.length > 0)) {
    return res.json({ message: "Title must be required" });
  }

  try {
    const newTodo = new Todo({ title });
    const save = await newTodo.save();

    if (save) {
      return res.status(200).json({ message: "Todo Added successfully" });
    }
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

// <==================== update ====================>
const update = async (req, res) => {
  const { id, title, isDone } = req.body;

  console.log(req.body);

  if (!id || !title) {
    return res.json({ error: "All filled must be required" });
  }

  try {
    const editTodo = Todo.findByIdAndUpdate(id, {
      title,
      isDone,
      updatedAt: Date.now(),
    });

    const edit = await editTodo.exec();

    if (edit) {
      return res.status(200).json({ success: "Todo updated successfully" });
    }
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

// <==================== del ====================>
const del = async (req, res) => {
  let { id } = req.body;

  if (!id) {
    return res.json({ error: "Id must be required" });
  }

  try {
    const deleteTodo = await Todo.findByIdAndDelete(id);

    if (deleteTodo) {
      return res.status(200).json({ success: "Todo deleted successfully" });
    }

    return res.status(400).json({ message: "Id does not exist" });
  } catch (err) {
    return res.status(400).json({ error: err?.message });
  }
};

export { getAll, add, update, del };
