// React App
import { useState } from "react";
import '../styles/showcaseRedux.scss';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { addTodo, removeTodo, setTodoStatus, editTodo } from "../redux/todoSlice";



function PageShowcaseRedux(){
	//React Hooks
	const [todoDescription, setTodoDescription] = useState("");

	//React Redux Hooks
	const todoList = useSelector((state: RootState) => state);
	const dispatch = useDispatch<AppDispatch>();
  
	//Rendering	
	return (<div className="page page_showcaseRedux"> 
			<h2 className="title">Showcase Redux</h2>
			<p className="description">An info page that displays showcase redux.</p>	
			<p className="message">Welcome to this page.</p>
			<div className="header1">
      <h2 className="h2">
        Redux List App
      </h2>
      <div  className="search-form">
      <input        
      className="input"
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
      />
      <button
        className="inputbtn"
        onClick={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
        }}
      >
        Add Item
      </button></div>
      <ul>
        {todoList.map((todo) => (
          <div className="ListItem" key={todo.id}>
            <div className= "ListItemText"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.description}
            </div>
            <div className="ListItemSecondaryAction" >
              <button className="deletebtn"
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >delete

              </button>
              <button
              className="editbutton"
                onClick={() => {
                  dispatch(editTodo(todo.id));
                }}
              >
                Edit Me
              </button>

              <input type="checkbox"
                value="{todo.completed}"
                onChange={() => {
                  dispatch(
                    setTodoStatus({ completed: !todo.completed, id: todo.id })
                  );
                }}
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
			</div>
     
		
	);
 }

export default PageShowcaseRedux;