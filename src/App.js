import {Component} from 'react';
import './App.css';

class App extends Component{
  constructor (props){
    super(props);

    this.state = {
      isClicked: false,
      todos: [],
      text: '',
    }
  }

  onClickHandler = (e) => {
      e.preventDefault();
      this.setState({
        isClicked: !this.state.isClicked
      });
      this.setState({
        todos: [...this.state.todos, 
          this.state.text],
      text: ''
    });
      console.log(this.state.isClicked);
      e.target.value = '';
  }
  
  onChangeHandler = (e) => {
    this.setState({text: e.target.value})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <input type="text" placeholder='todo' onChange={this.onChangeHandler} value={this.state.text}></input>
            <button onClick={(this.onClickHandler)}>Set Todo</button>
          </form>
          <ul id="list">
            {this.state.todos.map((e, i)=>{
              return <li key={i}>{this.state.todos[i]}<button>Delete</button></li>
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
