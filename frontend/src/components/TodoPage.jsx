import { useState } from "react";

export default function TodoPage(){
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");

    return <div style={{display:"flex" , justifyContent:"center"}}>
<div style={{marginBottom:20}}>
    <input style={{padding:10, margin:10}} type="text" placeholder="Title" onChange={(e) =>{
        const value = e.target.value;
        setTitle(value)
    }} /><br/>
        <input style= {{padding:10, margin:10}} type="text" placeholder="Description" onChange={(e) =>{
            const value = e.target.value;
            setDescription(value)}}/><br/>
        <button onClick={() =>{
            fetch("http://localhost:3000/todo" , {
                method : "POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }), 
                headers : {
                    "Content-type":"application/json"
                }
            })
            .then(async function (res) {
                const json = await res.json();
                alert("To-Do added")
            })
        }} style={{padding:10, margin:10}}>Add Todo</button>
        </div>
    </div>
    
    
}