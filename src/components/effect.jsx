import React   from 'react';
import Sound   from 'stores/sound'
import Monitor from 'mixins/monitor'

let Effect = React.createClass({

  mixins: Monitor,

  getInitialState() {
    let context = new (window.AudioContext || window.webkitAudioContext)()

    return {
      context,
      oscillator : context.createOscillator(),
      gain       : context.createGain()
    }
  },

  componentDidUpdate() {
    let { sound } = this.props

    this.state.oscillator.frequency.value = sound.frequency
    this.state.oscillator.type = sound.type
  },

  componentDidMount() {
    let { frequency, type } = this.props.sound
    let { oscillator, gain, context } = this.state

    oscillator.connect(gain)
    gain.connect(context.destination);

    oscillator.frequency.value = frequency
    oscillator.type = type;

    oscillator.start();
  },

  render() {
    let { type, frequency } = this.props.sound

    return (
        <div>
          <select defaultValue={ type } onChange={ this._onTypeChange }>
            <option value="sine">Sine</option>
            <option value="square">Square</option>
            <option value="sawtooth">Sawtooth</option>
            <option value="triangle">Triangle</option>
          </select>
          <input type="range" min="0" max="1000" defaultValue={ frequency } onChange={ this._onChange }/>
        </div>
    );
  },

  _onTypeChange(e) {
    Sound.update(this.props.sound, {
      type: e.currentTarget.value
    })
  },

  _onChange(e) {
    Sound.update(this.props.sound, {
      frequency: parseInt(e.currentTarget.value, 10)
    })
  }

});

export default Effect;
