import React, { useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';

export default function Todos(){
    const [todos, setTodos] =useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTodos(data.slice(0,10)))
    }, [])

    if (!localStorage.getItem('login')) {
        return (
            <Redirect to="/login"/>
        )
    }

    return(
        <div className="container">  
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) =>(
                            <tr key = {index}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? "v" : "x"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}