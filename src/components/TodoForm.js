import React, {useState} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

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
            />
            <button className='todo-button'>Add ToDo</button>
        </form>
    );
}

export default TodoForm;
