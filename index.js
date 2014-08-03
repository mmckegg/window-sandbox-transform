var PassThrough = require('stream').PassThrough

module.exports = function(file){
  var content = '';
  var stream = new PassThrough()
  stream.push('function Sandbox() {} Sandbox.prototype = global; var window = new Sandbox();\n')
  stream._flush = function(done){
    stream.push('\nmodule.exports = window')
    done()
  }
  return stream
}