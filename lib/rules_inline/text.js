// Skip text characters for text token, place those to pending buffer
// and increment current pos

'use strict';

module.exports = function text(state, silent) {
  var pos = state.pos;
  while (pos < state.posMax && !terminatorChrs[ state.src.charAt(pos)] ) {
    pos++;
  }

  if (pos === state.pos) { return false; }

  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

  state.pos = pos;

  return true;
};
// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions

var terminatorChrs = module.exports.terminatorChrs = {
    '\n': true,
    '\\': true,
    '`': true,
    '*': true,
    '_': true,
    '^': true,
    '[': true,
    ']': true,
    '!': true,
    '&': true,
    '<': true,
    '>': true,
    '{': true,
    '}': true,
    '$': true,
    '%': true,
    '@': true,
    '~': true,
    '+': true,
    '=': true,
    ':': true,
}
