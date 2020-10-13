import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  let todos;

  switch (req.method) {
    case "POST":
      const newTodos = JSON.parse(req.body);

      try {
        await db.collection("todos").drop();
      } catch (error) {
        console.log(error);
      }

      todos = await db.collection("todos").insertMany(newTodos);

      res.status(200).json(todos);
      break;
    case "GET":
      todos = await db.collection("todos").find({}).toArray();

      if (todos?.length === 0) {
        const initTodosNumber = 5;
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos?_start=0&_limit=${initTodosNumber}`
        );
        todos = await response.json();
        res.status(200).json(todos);
      }

      res.status(200).json(todos);
      break;
    default:
      res.status(404).json({ statusCode: 404, message: "Method not found" });
      break;
  }
};

export default handler;
