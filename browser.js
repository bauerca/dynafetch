/**
 *  In the browser version, require must accept a callback as the
 *  second parameter. This callback will be invoked with the executed
 *  module as first argument.
 */
module.exports = function(require) {
  if (arguments.length > 1) throw new Error('dynafetch needs require');
  return function(deps, callback) {
    var modules = [],
        fetched = 0,
        depIndex;
    for (depIndex in deps) (function(depIndex) {
      require(deps[depIndex], function(module) {
        modules[depIndex] = module;
        if (++fetched == deps.length) //{
          callback.apply(null, modules);
        //}
      });
    })(depIndex);
  }
};
