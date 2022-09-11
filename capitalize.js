function capitalize(opts) {
  let string = this;
  opts = normalizeOptions(opts);
  if (!opts.preserve) {
    string = string.toLowerCase();
  }
  return string.charAt(0).toUpperCase() + string.substring(1);
}

function normalizeOptions(opts) {
  if (!opts) {
    return { preserve: false };
  }
  if (typeof opts === 'boolean') {
    return { preserve: opts };
  }
  if (opts.skipWord instanceof RegExp) {
    const rgx = opts.skipWord;
    opts.skipWord = function (word, position) {
      return position > 0 && rgx.test(word);
    }
  }
  return opts || {};
}

// for future spec
String.prototype.capitalize = String.prototype.capitalize || capitalize;
String.prototype.capitalizeOverride = capitalize;
