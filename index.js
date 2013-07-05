'use strict';
var __hop = Object.prototype.hasOwnProperty

exports = module.exports = install
exports.install = install

function install(db) { 
  var sublevel = db.sublevel
  db.sublevel = function(key) {
    var ret = sublevel.apply(this, arguments)
    if (!__hop.call(db, key))
      db[key] = ret
    return ret
  }
  var sublevels = db.sublevels
  if (sublevels)
    for (var key in sublevels) if (__hop.call(sublevels, key))
      db.sublevel(key)
  return db
}
