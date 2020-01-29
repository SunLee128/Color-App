import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors.js';
import { generatePalette } from './colorHelper';

function App () {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here</h1> }/>
      <Route exact path="/palette/:id" render={() => <h1>individual palette</h1> } />
    </Switch>
    // <div className='App'>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
