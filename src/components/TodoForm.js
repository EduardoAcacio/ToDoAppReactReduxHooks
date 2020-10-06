import React, { useState , useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus() 
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handlerSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handlerSubmit}>
            <input 
                type='text'
                placeholder='App a ToDo' 
                value={input}
                name='text'
                className='todo-form'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button'>Add ToDo</button>
        </form>
    );
}

export default TodoForm;
