import mongoose from 'mongoose';

 mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
 .then(() => {
   console.log("Database Connected");
   })
   .catch((err) => {
    console.error("Error connecting to Database:", err);
  });

  const schema =  mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
   })

   const todos = mongoose.model("Todos" , schema);

   export default todos;