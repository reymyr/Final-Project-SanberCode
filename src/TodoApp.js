import React from 'react';

// Menunjukkan banyak todo yang tersisa
function ShowNumTodo(props) {
  return(
    <h1>
      {props.num} Tasks left
    </h1>
  );
}
  
// Form input untuk menambah todo
class AddTodo extends React.Component {
  state = { text: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === '') return;
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  handleChange = (e) => this.setState({text: e.target.value})

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter Task" value={this.state.text} onChange={this.handleChange} />
        <button className='button'>Submit</button>
      </form>
    );
  }
}

// Item list setiap todo
function Todo(props) {
  return(
    <div className='listitem'>
      {props.content}
      &nbsp;
      <button onClick={() => {props.onDelete(props.id)}}>X</button>
    </div>
  );
}
  
// Menampilkan Todolist sebagai list
function TodoList(props) {
  const todos = props.todos.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
  })
  return( 
    <div className='list'>
      {todos}
    </div>
  );
}
  
// Komponen Aplikasi Todo List
class TodoApp extends React.Component {
  state = {
    todos: []
  }

  handleAdd = (task) => {
    if (task !== '') {
      this.setState((prevState) => ({todos: [...prevState.todos, task]}) )
    }
    console.log(this.theme)
  }

  handleDelete = (index) => {
    const newArr = [...this.state.todos];
    newArr.splice(index, 1);
    this.setState({todos: newArr});
  }

  render() {
    return (
      <div className="todo-app" >
          <ShowNumTodo num={this.state.todos.length}/>
          <AddTodo onSubmit={this.handleAdd} />
          <TodoList todos={this.state.todos} onDelete={this.handleDelete}/>
      </div>
    );
  }
}
  
export default TodoApp