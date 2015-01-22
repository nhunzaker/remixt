/**
 * Scratch
 * A basic project for demonstrating new techniques
 * on thereactway.io
 */

import Effect     from './effect'
import Monitor    from 'mixins/monitor'
import React      from 'react'
import Sound      from 'stores/sound'
import Visualizer from './visualizer'

let App = React.createClass({

  mixins: [ Monitor ],

  getState() {
    return {
      sounds: Sound.all()
    }
  },

  addSound(sound, i) {
    return <Effect key={ i } sound={ sound } />
  },

  render() {
    return (
      <div>
        <Visualizer />
        { this.state.sounds.map(this.addSound) }
        <button onClick={ this._onClick }>Add sound</button>
      </div>
    );
  },

  _onClick() {
    Sound.add('sound')
  }

});

export default App;
