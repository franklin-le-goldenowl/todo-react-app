import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { createTodo, deleteTodo, updateTodo, changeTodoFilter, clearCompletedTodo } from '../../actions/todoActions';

import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import TodoFooter from '../../components/TodoFooter';

import './index.css';
import { filterTodos, getIncompletedTodoCount } from '../../utils/todoUtils';

class TodosContainer extends Component {
  handleCreateTodo = (content) => {
    const { createTodo } = this.props;

    createTodo(content);
  };

  handleUpdateTodo = (id, attributes) => {
    const { updateTodo } = this.props;

    updateTodo(id, attributes);
  };

  handleDeleteTodo = (id) => {
    const { deleteTodo } = this.props;

    deleteTodo(id);
  };

  handleChangeFilter = (filter) => {
    const { changeTodoFilter } = this.props;

    changeTodoFilter(filter);
  };

  handleClearComplete = () => {
    const { clearCompletedTodo } = this.props;

    clearCompletedTodo();
  };

  render() {
    const { todos, filter, incompletedCount } = this.props;

    return (
      <div className='app-container'>
        <div className='todo-container'>
          <TodoForm onCreateTodo={this.handleCreateTodo} />
          <TodoList todos={todos} onDeleteTodo={this.handleDeleteTodo} onUpdateTodo={this.handleUpdateTodo} />
          <TodoFooter
            activeFilter={filter}
            incompletedCount={incompletedCount}
            onChangeFilter={this.handleChangeFilter}
            onClearComplete={this.handleClearComplete}
          />
        </div>
      </div>
    );
  }
}

TodosContainer.propTypes = {
  todos: PropTypes.array,
  filter: PropTypes.string,
  createTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  changeTodoFilter: PropTypes.func,
  clearCompletedTodo: PropTypes.func,
};

const mapStateToProps = ({ todo }) => {
  const { filter, items } = todo;
  const todos = filterTodos(items, filter);
  const incompletedCount = getIncompletedTodoCount(todo.items);

  return {
    todos,
    filter,
    incompletedCount,
  };
};

const mapDispatchToProps = {
  createTodo,
  deleteTodo,
  updateTodo,
  changeTodoFilter,
  clearCompletedTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
