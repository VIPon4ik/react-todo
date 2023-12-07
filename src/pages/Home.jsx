import React from "react";
import { useGetTodosQuery } from "../redux/todoSlice";
import TodoItem from "components/TodoItem/TodoItem";

const Home = () => {
    const { data, error, isLoading } = useGetTodosQuery();
    return (
        <>
            <h1>Your Todos list</h1>
            {error && <p>Error: {error.message}</p>}
            {isLoading && <p>Loading ...</p>}
            <ul>
                {data &&
                    data.map(({ task, id }) => (
                        <TodoItem key={id} ID={id}>
                            {task}
                        </TodoItem>
                    ))}
            </ul>
        </>
    );
};

export default Home;
