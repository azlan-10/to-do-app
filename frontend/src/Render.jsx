import { useState } from "react";

export function Render({ todos }) {

  
    return (
      <div>
        {todos.map((todo, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ backgroundColor: "pink", padding: 10 }}>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button >
                {todo.completed ? "Completed" : "Mark as Complete"}</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  