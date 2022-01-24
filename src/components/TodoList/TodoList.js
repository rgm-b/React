import {useState} from "react";
import {Button, FormControl} from "react-bootstrap";
import s from "./TodoList.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashAlt, faPencilAlt, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

function TodoList({todo, setTodo}){

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');

    function deleteTodo(id){
        let newTodo = [...todo].filter( item => item.id != id );
        setTodo(newTodo);
    }

    function statusTodo(id){
        let newTodo = [...todo].filter( item => {
            if(item.id === id){
                item.status = !item.status;
            }
            return item;
        })
        setTodo(newTodo);
    }

    function editTodo(id, title){
        setEdit(id);
        setValue(title);
    }

    function saveChangeTodo(id){
        let newTodo = [...todo].map(item=>{
            if(item.id === id){
                item.title = value;
            }
            return item;
        })
        setTodo(newTodo);
        setEdit(null);
    }

    console.log(todo);

    const todoList = todo.map( item => {
        return (
            <div key={item.id} className={s.listItems}>
                {
                    edit === item.id?

                        <FormControl onChange={(event)=>{setValue(event.target.value)}} value={value}/>

                    :
                        <div className={item.status? s.close : ''}>{item.title}</div>
                }
                {
                    edit === item.id?
                    <div>
                        <Button onClick={()=>{saveChangeTodo(item.id)}} size="sm"><FontAwesomeIcon icon={faSave}/></Button>
                    </div>
                    :
                    <div>
                        <Button onClick={() => deleteTodo(item.id)} size="sm"><FontAwesomeIcon icon={faTrashAlt}/></Button>
                        <Button onClick={() => editTodo(item.id, item.title)} className={s.button} size="sm"><FontAwesomeIcon icon={faPencilAlt}/></Button>
                        <Button onClick={() => statusTodo(item.id)} className={s.button} size="sm">
                            {
                                item.status ? <FontAwesomeIcon icon={faLock}/> : <FontAwesomeIcon icon={faLockOpen}/>
                            }
                        </Button>
                    </div>
                }
            </div>
        )
    })

    return(
        todoList
    )
}

export default TodoList;