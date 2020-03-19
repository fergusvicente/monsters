import React, {Component} from 'react';
import { CardList } from './component/card-list/card-list.component'
import './App.css';
import { render } from '@testing-library/react';
import {SearchBox} from './component/search-box/search-box.component';


class App extends React.Component {
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
      
      .then(users => this.setState({ monsters: users }));
      
    }

    handleChange = e => {
      this.setState({ searchField: e.target.value });
    }


  render() {

      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
        )
    return (
      <div className="App">
      <h1> monstricos y eso ps</h1>
      <SearchBox 
       placeholder='search monster'
       handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters}>  
        
        </CardList>
        </div>
        );
  }}


export default App;
