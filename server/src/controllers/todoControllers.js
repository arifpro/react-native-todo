import Todo from "../models/Todo.js";

// <==================== getAll ====================>
const getAll = async (req, res) => {}

// <==================== add ====================>
const add = async (req, res) => {
  const { title } = req.body;

  if (!(title.length > 0)) {
    return res.json({ message: "Title must be required" });
  } else {
    try {
      const newTodo = new Todo({ title });
      await newTodo.save();
    } catch (err) {
      return res.status(400).json({ error });
    }
  }
};

// <==================== edit ====================>
const edit = async (req, res) => {}

// <==================== del ====================>
const del = async (req, res) => {}

// <==================== done ====================>
const done = async (req, res) => {}

export { getAll, add, edit, del, done };
