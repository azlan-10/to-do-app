import express from 'express'
const app = express();
import { createTodo , updateTodo } from './zod.js';
import todos from './db.js';
import cors from 'cors'

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req,res){
   const response = createTodo.safeParse(req.body);
   if(!response.success){
    res.status(411).send({
        message : " you sent wrong inputs"
    })
    return;
   }
  await todos.create({
    title: response.data.title,
    description: response.data.description,
    completed : false
   })
   res.json({
    message:"To-Do Created"
   })
})


app.get("/todos", async function(req,res){
    const todos1 = await todos.find(); 
    res.json({
        todos: todos1 
    })
})


app.put("/completed", async function(req,res){
    const {success} = updateTodo.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message:"you sent wrong input"
        })
        return
    }
    await todos.updateOne({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        message : "Todo's marked as completed"
    })
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});