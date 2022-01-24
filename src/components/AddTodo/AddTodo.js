import React from 'react'
import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import {Col, Row, Button, FormControl} from "react-bootstrap";
import s from "./AddTodo.module.css";

function AddTodo({todo, setTodo}){

    const [value, setValue] = useState('');

    console.log(value)

    function saveTodo(){
        if(value){
            setTodo([...todo, {
                id: uuidv4(),
                title: value,
                status: false
            }]);
            setValue('');
        }

    }

    //хук выполняется после каждой прорисовки страницы
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);  // чтобы useEffect выполнялся только при каждом изменении todo, а не при каждом рендеринге

    return(
        <div className={s.addTodoForm}>
            <FormControl placeholder="Введите задачу" onChange={(event)=>setValue(event.target.value)} value={value} />
            <Button variant="success" onClick={saveTodo} className={s.button}>Сохранить</Button>
        </div>

    )
}

export default AddTodo;