class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('Hello World Plugin', (stats) => {
        console.log('Hello World!');
        console.log('stats', stats)
      }
    );
  }
}

module.exports = HelloWorldPlugin;