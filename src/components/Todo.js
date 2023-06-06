import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaArchive , FaEdit} from "react-icons/fa";

//redux
import { connect } from "react-redux";
import { removeTodo, editTodo } from "../action/todo";

const Todo = ({ todos, markComplete, markEdit }) => {
  return (
    <ListGroup className="mt-5 mb-2">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.title}
          <span className="float-right" onClick={() => markComplete(todo.id)}>
            <FaArchive className="float-end" />
          </span>
          <span className="float-right" onClick={() =>{
            const newTitle = prompt("Edit Task",todo.title)
            if(newTitle !==null ){
              markEdit({id:todo.id, title:newTitle});
            }
          }
           }>
            <FaEdit className="float-end mx-5"/>
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
  },
  markEdit:(todo) => {
    dispatch(editTodo(todo))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
