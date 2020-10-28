import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import {useCollection} from 'react-firebase-hooks/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';

import firebase from './firebase';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const App = () => {
    const [value] = useCollection(firebase.firestore().collection('todos').orderBy('timestamp', 'asc'));
    const [user, loading] = useAuthState(firebase.auth());

    const toggleChecked = (todoId, checked) =>
        firebase.firestore().collection('todos').doc(todoId).update({checked});

    const deleteTodo = todoId =>
        firebase.firestore().collection('todos').doc(todoId).delete();

    const addTodo = content =>
        firebase.firestore().collection('todos').add({checked: false, content, timestamp: Date.now(), userId: user.uid});

    const signIn = () => firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

    const signOut = () => firebase.auth().signOut();


    if (loading) return <div/>;

    return (
        <Router>
            <Switch>
                {user === null &&
                <Route path={'/login'}>
                    <LoginPage signIn={signIn}/>
                </Route>
                }

                {user !== null &&
                <Route path={'/'} exact={true}>
                    <HomePage
                        todoList={value === undefined ? [] : value.docs.map(doc => ({id: doc.id, ...doc.data()})).filter(todo => todo.userId === user.uid)}
                        toggleChecked={toggleChecked}
                        deleteTodo={deleteTodo}
                        addTodo={addTodo}
                        signOut={signOut}
                    />
                </Route>
                }

                <Redirect to={user !== null ? '/' : '/login'}/>
            </Switch>
        </Router>
    );
}

export default App;
