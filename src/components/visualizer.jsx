import Sound  from 'stores/sound'
import React  from 'react'
import Effect from './effect'
import Monitor from 'mixins/monitor'

let Visualizer = React.createClass({

  mixins: [ Monitor ],

  shouldComponentUpdate() {
    return false
  },

  getState() {
    return {
      sounds: Sound.all()
    }
  },

  tick() {
    let canvas = this.getDOMNode()
    let { context, sounds } = this.state

    context.save()
    context.translate(-1, 0)
    context.drawImage(canvas, 0, 0);
    context.restore()
    context.globalAlpha = 0.1;
    context.fillStyle = "#fff"
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.globalAlpha = 1;

    sounds.forEach((sound, i) => {
      context.fillStyle = `hsl(${ (i * 30) % 350 }, 80%, 50%)`
      context.fillRect(150, 200 - 200 * (sound.frequency / 1000), 2, 2)
    })

    requestAnimationFrame(this.tick)
  },

  componentDidMount() {
    this.setState({
      context: this.getDOMNode().getContext('2d')
    }, this.tick)
  },

  render() {
    return <canvas height="200" width="700"></canvas>
  },

  _onClick() {
    Sound.add('sound')
  }

});

export default Visualizer
