module.exports = function(require) {
  if (arguments.length > 1) throw new Error('Did you forget to pass require to dynafetch?');
  return function(deps, callback) {
    process.nextTick(function() {
      callback.apply(null, deps.map(function(dep) {
        return require(dep);
      }));
    });
  };
};
