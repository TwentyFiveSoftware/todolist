import React from 'react';

import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';

const HomePage = ({todoList, toggleChecked, deleteTodo, addTodo, signOut}) => (
    <div className={'page'}>
        <Header signOut={signOut}/>
        <div className={'content'}>
            <div className={'list'}>
                {todoList.map(todo =>
                    <TodoItem
                        key={todo.id}
                        content={todo.content}
                        checked={todo.checked}
                        toggleChecked={() => toggleChecked(todo.id, !todo.checked)}
                        deleteTodo={() => deleteTodo(todo.id)}
                    />
                )}
                <AddTodo addTodo={addTodo}/>
            </div>
        </div>
    </div>
);

export default HomePage;
