module.exports = function(require) {
  return function(deps, callback) {
    process.nextTick(function() {
      callback.apply(null, deps.map(function(dep) {
        return require(dep);
      }));
    });
  };
};
