import Bus from 'bus'

let _defaults = {
  type      : 'sine',
  frequency : 0
}
let _sounds = []

let Sound = {

  all() {
    return _sounds
  },

  add(params) {
    let sound = {..._defaults, ...sound }

    _sounds.push(sound)

    Bus.publish()
  },

  update(sound, params) {
    var index = _sounds.indexOf(sound)

    _sounds[index] = { ...sound, ...params }

    Bus.publish()
  }

}

export default Sound
