// React App
import { useState } from "react";
import '../styles/showcaseRedux.scss';
// Material-UI Imports
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
// Other Imports
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
			<Container maxWidth="xs">
      <Typography style={{ textAlign: "center" }} variant="h3">
        Redux List App
      </Typography>
      <TextField
        variant="outlined"
        label="To Do Item"
        fullWidth
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
        }}
      >
        Add Item
      </Button>
      <List>
        {todoList.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.description}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
              
                onClick={() => {
                  dispatch(editTodo(todo.id));
                }}
              >
                <EditIcon />
              </IconButton>

              <Checkbox
                edge="end"
                value={todo.completed}
                onChange={() => {
                  dispatch(
                    setTodoStatus({ completed: !todo.completed, id: todo.id })
                  );
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
			</div>
     
		
	);
 }

export default PageShowcaseRedux;