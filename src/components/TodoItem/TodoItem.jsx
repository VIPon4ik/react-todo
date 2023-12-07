import React from "react";
import { useDeleteTodoMutation } from "../../redux/todoSlice";
import { Link } from "react-router-dom";

const TodoItem = ({ ID, children }) => {
    const [deleteTodo, { isLoading: isDeleteLoading }] =
        useDeleteTodoMutation();
    return (
        <li>
            {children}
            <button
                type="button"
                onClick={() => deleteTodo(ID)}
                disabled={isDeleteLoading}
            >
                Delete {isDeleteLoading && <p>Loading...</p>}
            </button>
            <Link to={`edit/${ID}`}>Edit</Link>
        </li>
    );
};

export default TodoItem;
