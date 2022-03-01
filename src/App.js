
import { Component } from 'react';
import './App.css';
import { CardList } from './Components/Card-List/Card-list';
import { SearchBox } from './Components/SearchBox/SearchBox.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state
    const filteredmonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox handleChange={this.handleChange} placeholder={'Search Monsters'} />
        <CardList monsters={filteredmonsters} />
      </div>
    );
  }
}
export default App;
