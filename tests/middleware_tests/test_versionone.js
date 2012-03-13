var base = require('./base');

exports.test_example_minimum = function(test, assert) {
  base.run_test(test, assert, 'example-minimum.json', 'versionone', 'versionone', false);
};

exports.test_example_simple = function(test, assert) {
  base.run_test(test, assert, 'example-simple.json', 'versionone', 'versionone', false);
};

exports.test_example_full = function(test, assert) {
  base.run_test(test, assert, 'example-full.json', 'versionone', 'versionone', true);
};
