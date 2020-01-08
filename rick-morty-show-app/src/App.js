import React from 'react';
import logo from './logo.svg';
import './App.css';



// Components
import {Filters} from "./components/Filters/Filters";
import {SelectedFilters} from "./components/SelectedFilters/SelectedFilters";
import {Cards} from "./components/Cards/Cards";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Filters />
          <SelectedFilters />
          <Cards />
      </div>
    );

  }
}

