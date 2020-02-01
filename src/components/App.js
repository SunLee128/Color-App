import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from 'components/Palette';
import PaletteList from 'components/PaletteList';
import seedColors from '../seedColors';
import { generatePalette } from '../colorHelper';

class App extends Component {
  findPalette (id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }

  render () {
    return (
      <Switch>
         <Route
          exact
          path='/'
          render={routeProps => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={() => <h1>INDIVIDUAL PALETTE</h1>}
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
      // <div className='App'>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
