class RemoveFilePlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("Remove File Plugin", (
      compilation /* stats is passed as an argument when done hook is tapped.  */
    ) => {
      console.log(compilation);
      for (const name in compilation.assets) {
        if (name.endsWith("LICENSE.txt")) {
          delete compilation.assets[name];
        }
      }
    });
  }
}

module.exports = RemoveFilePlugin;
