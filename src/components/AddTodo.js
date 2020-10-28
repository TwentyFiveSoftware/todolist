import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

class AddTodo extends Component {
    state = {
        active: false,
        input: ''
    }

    addTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({input: '', active: false});
    }

    render() {
        if (this.state.active === false) {
            return (
                <div className={'add-todo add-todo-closed'} onClick={() => this.setState({active: true})}>
                    <FontAwesomeIcon icon={faPlus}/> Add Todo
                </div>
            );
        } else {
            return (
                <form className={'add-todo'} onSubmit={e => {e.preventDefault(); this.addTodo()}}>
                    <input
                        className={'add-todo__input'}
                        placeholder={'...'}
                        value={this.state.input}
                        onChange={e => this.setState({input: e.target.value})}
                        spellCheck={false}
                        autoFocus={true}
                    />

                    <div className={'add-todo__buttons'}>
                        <div className={'button ' + (this.state.input.length > 0 ? '' : 'button--disabled')} onClick={() => this.addTodo()}>
                            Add Todo
                        </div>
                        <div className={'button button--secondary'} onClick={() => this.setState({active: false, input: ''})}>Cancel</div>
                    </div>
                </form>
            );
        }
    }
}

export default AddTodo;
