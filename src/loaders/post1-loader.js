function loader(source, map){
  console.log('post1 normal', source)
  console.log('post1 normal-------', source)
  return source + '-post1'
}

loader.pitch = function(){
  console.log('post1 pitch')
}

module.exports = loader