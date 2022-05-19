module.exports = function(source, map){
  
  let opt = this.request
  console.log(opt, '-----------')
  return source
}

module.exports.pitch = function(source, map){
  console.log('pitch loader1')
  return
}